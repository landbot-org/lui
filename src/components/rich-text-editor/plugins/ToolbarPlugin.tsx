import { useCallback, useEffect, useState } from 'react';

import {
  faBold,
  faCode,
  faHeading,
  faItalic,
  faListOl,
  faListUl,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { $createCodeNode } from '@lexical/code';
import {
  $isListNode,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
  REMOVE_LIST_COMMAND,
} from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createHeadingNode, $createQuoteNode, $isHeadingNode, HeadingTagType } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import { $findMatchingParent, $getNearestNodeOfType, mergeRegister } from '@lexical/utils';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  $isRootOrShadowRoot,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';

import { Box } from '../../box';
import { Button } from '../../button';

const LowPriority = 1;

const codeLanguage = 'html';

const blockTypeToBlockName = {
  bullet: 'Bulleted List',
  check: 'Check List',
  code: 'Code Block',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  number: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
};

export const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [blockType, setBlockType] = useState<keyof typeof blockTypeToBlockName>('paragraph');

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if (!$isRangeSelection(selection)) return;

    const anchorNode = selection.anchor.getNode();
    let element =
      anchorNode.getKey() === 'root'
        ? anchorNode
        : $findMatchingParent(anchorNode, (e) => {
            const parent = e.getParent();
            return parent !== null && $isRootOrShadowRoot(parent);
          });

    if (element === null) {
      element = anchorNode.getTopLevelElementOrThrow();
    }

    const elementKey = element.getKey();
    const elementDOM = editor.getElementByKey(elementKey);

    setIsBold(selection.hasFormat('bold'));
    setIsItalic(selection.hasFormat('italic'));

    if (elementDOM !== null) {
      if ($isListNode(element)) {
        const parentList = $getNearestNodeOfType<ListNode>(anchorNode, ListNode);
        const type = parentList ? parentList.getListType() : element.getListType();
        setBlockType(type);
      } else {
        const type = $isHeadingNode(element) ? element.getTag() : element.getType();
        if (type in blockTypeToBlockName) {
          setBlockType(type as keyof typeof blockTypeToBlockName);
        }
      }
    }
  }, [editor]);

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType === headingSize) {
      formatParagraph();
      return;
    }
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(headingSize));
      }
    });
  };

  const formatBulletList = () => {
    if (blockType === 'bullet') {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
  };

  const formatNumberedList = () => {
    if (blockType === 'number') {
      editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
      return;
    }
    editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
  };

  const formatQuote = () => {
    if (blockType === 'quote') {
      formatParagraph();
      return;
    }
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createQuoteNode());
      }
    });
  };

  const formatCode = () => {
    if (blockType === 'code') {
      formatParagraph();
      return;
    }
    editor.update(() => {
      let selection = $getSelection();

      if ($isRangeSelection(selection)) {
        if (selection?.isCollapsed()) {
          $setBlocksType(selection, () => $createCodeNode(codeLanguage));
        } else {
          const textContent = selection?.getTextContent() ?? '';
          const codeNode = $createCodeNode(codeLanguage);
          selection?.insertNodes([codeNode]);
          selection = $getSelection();
          if ($isRangeSelection(selection)) selection.insertRawText(textContent);
        }
      }
    });
  };

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        () => {
          updateToolbar();
          return false;
        },
        LowPriority,
      ),
    );
  }, [editor, updateToolbar]);

  return (
    <Box display="flex" flexWrap="wrap">
      <Button
        color="blue.main"
        variant={isBold ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faBold} />}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
        aria-label="bold"
      />
      <Button
        color="blue.main"
        variant={isItalic ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faItalic} />}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}
        aria-label="italic"
      />
      <Button
        color="blue.main"
        variant={blockType === 'code' ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faCode} />}
        onClick={formatCode}
        aria-label="code"
      />
      <Button
        color="blue.main"
        variant={blockType === 'h1' ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faHeading} />}
        onClick={() => formatHeading('h1')}
        aria-label="heading"
      />
      <Button
        color="blue.main"
        variant={blockType === 'number' ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faListOl} />}
        onClick={formatNumberedList}
        aria-label="list-ol"
      />
      <Button
        color="blue.main"
        variant={blockType === 'bullet' ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faListUl} />}
        onClick={formatBulletList}
        aria-label="list-ul"
      />
      <Button
        color="blue.main"
        variant={blockType === 'quote' ? 'contained' : 'text'}
        startIcon={<FontAwesomeIcon icon={faQuoteRight} />}
        onClick={formatQuote}
        aria-label="quote"
      />
    </Box>
  );
};
