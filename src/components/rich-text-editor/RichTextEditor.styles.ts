import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { styled } from 'styled-components';

import { inputBackgroundStyle, inputBorderStyle } from '../../shared/inputStyles';
import { pxToRem } from '../../shared/mixins';
import { Theme } from '../../shared/theme.types';
import { Box } from '../box';
import { Typography } from '../typography';

export const editorTheme = {
  ltr: 'ltr',
  rtl: 'rtl',
  paragraph: 'editor-paragraph',
  quote: 'editor-quote',
  heading: {
    h1: 'editor-heading-h1',
    h2: 'editor-heading-h2',
    h3: 'editor-heading-h3',
    h4: 'editor-heading-h4',
    h5: 'editor-heading-h5',
    h6: 'editor-heading-h6',
  },
  list: {
    nested: {
      listitem: 'editor-nested-listitem',
    },
    ol: 'editor-list-ol',
    ul: 'editor-list-ul',
    listitem: 'editor-listItem',
    listitemChecked: 'editor-listItemChecked',
    listitemUnchecked: 'editor-listItemUnchecked',
  },
  hashtag: 'editor-hashtag',
  image: 'editor-image',
  link: 'editor-link',
  text: {
    bold: 'editor-textBold',
    code: 'editor-textCode',
    italic: 'editor-textItalic',
    strikethrough: 'editor-textStrikethrough',
    subscript: 'editor-textSubscript',
    superscript: 'editor-textSuperscript',
    underline: 'editor-textUnderline',
    underlineStrikethrough: 'editor-textUnderlineStrikethrough',
  },
  code: 'editor-code',
  codeHighlight: {
    atrule: 'editor-tokenAttr',
    attr: 'editor-tokenAttr',
    boolean: 'editor-tokenProperty',
    builtin: 'editor-tokenSelector',
    cdata: 'editor-tokenComment',
    char: 'editor-tokenSelector',
    class: 'editor-tokenFunction',
    'class-name': 'editor-tokenFunction',
    comment: 'editor-tokenComment',
    constant: 'editor-tokenProperty',
    deleted: 'editor-tokenProperty',
    doctype: 'editor-tokenComment',
    entity: 'editor-tokenOperator',
    function: 'editor-tokenFunction',
    important: 'editor-tokenVariable',
    inserted: 'editor-tokenSelector',
    keyword: 'editor-tokenAttr',
    namespace: 'editor-tokenVariable',
    number: 'editor-tokenProperty',
    operator: 'editor-tokenOperator',
    prolog: 'editor-tokenComment',
    property: 'editor-tokenProperty',
    punctuation: 'editor-tokenPunctuation',
    regex: 'editor-tokenVariable',
    selector: 'editor-tokenSelector',
    string: 'editor-tokenSelector',
    symbol: 'editor-tokenProperty',
    tag: 'editor-tokenProperty',
    url: 'editor-tokenOperator',
    variable: 'editor-tokenVariable',
  },
  variable: 'editor-variable',
  emoji: 'editor-emoji',
  embedBlock: {
    base: 'editor-embedBlock',
    focus: 'editor-embedBlockFocus',
  },
};

interface StyledEditorContainerProps {
  $disabled?: boolean;
  $error?: boolean;
  theme: Theme;
}

export const StyledEditorContainer = styled(Box)<StyledEditorContainerProps>`
  ${inputBorderStyle}
  ${inputBackgroundStyle}
  position: relative;
`;

export const StyledContentEditableWrapper = styled.div`
  position: relative;
`;

export const StyledContentEditable = styled(ContentEditable)`
  position: relative;
  padding: ${pxToRem(8)}rem ${pxToRem(16)}rem;
  outline: 0;
  min-height: ${pxToRem(80)}rem;
  cursor: text;
  font-size: ${pxToRem(16)}rem;
  font-family: ${({ theme }) => theme.typography.font.primary};

  .${editorTheme.text.italic} {
    font-style: italic;
  }

  .${editorTheme.text.bold} {
    font-weight: bold;
  }

  .${editorTheme.text.underline} {
    text-decoration: underline;
  }

  .${editorTheme.text.strikethrough} {
    text-decoration: line-through;
  }

  .${editorTheme.text.code} {
    font-family: Consolas, Monaco, monospace;
    font-size: ${pxToRem(14)}rem;
    background-color: #f0f2f5;
    padding: ${pxToRem(2)}rem ${pxToRem(4)}rem;
    border-radius: 2px;
  }

  .${editorTheme.heading.h1} {
    font-size: ${pxToRem(20)}rem;
  }
  .${editorTheme.heading.h2} {
    font-size: 18px;
  }
  .${editorTheme.heading.h2} {
    font-size: 18px;
  }

  .${editorTheme.list.ol}, .${editorTheme.list.ul} {
    list-style-position: inside;
  }

  .${editorTheme.list.ol} {
    list-style-type: decimal;
  }

  .${editorTheme.list.ul} {
    list-style-type: disc;
  }

  .${editorTheme.quote} {
    padding-left: 12px;
    border-left: 4px solid rgba(0, 0, 0, 0.1);
  }

  .${editorTheme.code} {
    color: ${({ theme }) => theme.palette.blue.main};
    background-color: #f0f2f5;
    font-family: Consolas, Monaco, monospace;
    display: block;
    line-height: 1.53;
    font-size: 14px;
    margin: 8px 0;
    overflow-x: auto;
    position: relative;
    tab-size: 2;
    /* white-space: nowrap; */
    padding: 8px;

    /* With line numbers */
    /* padding: 8px 8px 8px 52px;

    &:before {
      content: attr(data-gutter);
      position: absolute;
      background-color: #eee;
      left: 0;
      top: 0;
      border-right: 1px solid #ccc;
      padding: 8px;
      color: #777;
      white-space: pre-wrap;
      text-align: right;
      min-width: 25px;
    } */
  }
  .${editorTheme.codeHighlight.comment} {
    color: slategray;
  }
  .${editorTheme.codeHighlight.punctuation} {
    color: #999;
  }
  .${editorTheme.codeHighlight.property} {
    color: #905;
  }
  .${editorTheme.codeHighlight.selector} {
    color: #690;
  }
  .${editorTheme.codeHighlight.operator} {
    color: #9a6e3a;
  }
  .${editorTheme.codeHighlight.attr} {
    color: #07a;
  }
  .${editorTheme.codeHighlight.variable} {
    color: #e90;
  }
  .${editorTheme.codeHighlight.function} {
    color: #dd4a68;
  }
`;

export const StyledPlaceholder = styled(Typography)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

export const StyledToolbarContainer = styled(Box)`
  outline: 0;
`;
