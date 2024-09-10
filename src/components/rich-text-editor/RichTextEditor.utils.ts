import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { $convertFromMarkdownString, $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { $getRoot, $insertNodes, LexicalEditor } from 'lexical';

import { Formats } from './RichTextEditor.types';

export const getInputState =
  (value: string, inputFormat: Formats) =>
  (editor: LexicalEditor): void => {
    switch (inputFormat) {
      case 'html':
      case 'text': {
        const parser = new DOMParser();
        const dom = parser.parseFromString(value, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);
        $insertNodes(nodes);
        return;
      }
      case 'markdown': {
        $convertFromMarkdownString(value, TRANSFORMERS);
        return;
      }
      case 'json':
      default: {
        const payload = JSON.parse(value || 'null');
        if (payload?.root) {
          const initialState = editor.parseEditorState(payload);
          editor.setEditorState(initialState);
        }
      }
    }
  };

export const getOutput = (editor: LexicalEditor) => {
  return {
    htmlString: $generateHtmlFromNodes(editor, null),
    markdownString: $convertToMarkdownString(TRANSFORMERS),
    text: $getRoot().getTextContent(),
    jsonString: JSON.stringify(editor.getEditorState().toJSON()),
  };
};
