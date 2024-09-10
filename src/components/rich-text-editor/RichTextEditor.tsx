import { useCallback, useId, useMemo } from 'react';

import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { ListItemNode, ListNode } from '@lexical/list';
import { TRANSFORMERS } from '@lexical/markdown';
import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { EditorState, LexicalEditor } from 'lexical';

import { FormHelperText } from '../form-helper-text';
import { FormLabel } from '../form-label';
import { Typography } from '../typography';
import { RichTextEditorProps } from './RichTextEditor.types';
import { getInputState, getOutput } from './RichTextEditor.utils';
import { CodeHighlightPlugin } from './plugins/CodeHighlightPlugin';
import { MaxLengthPlugin } from './plugins/MaxLengthPlugin';
import { OnFocusPlugin } from './plugins/OnFocusPlugin';
import { ToolbarPlugin } from './plugins/ToolbarPlugin';

import {
  StyledContentEditable,
  StyledContentEditableWrapper,
  StyledEditorContainer,
  StyledPlaceholder,
  StyledToolbarContainer,
  editorTheme,
} from './RichTextEditor.styles';

export const RichTextEditor = ({
  inputFormat = 'json',
  onChange,
  onFocus,
  placeholder,
  readOnly,
  error,
  initialValue = '',
  label,
  description,
  helperText,
  maxLength,
}: RichTextEditorProps) => {
  const initialConfig = useMemo<InitialConfigType>(
    () => ({
      editorState: getInputState(initialValue, inputFormat),
      editable: !readOnly,
      namespace: 'rich-text-editor',
      onError: (error: Error) => {
        console.error(error);
      },
      nodes: [
        HeadingNode,
        HorizontalRuleNode,
        ListNode,
        ListItemNode,
        QuoteNode,
        CodeNode,
        CodeHighlightNode,
        AutoLinkNode,
        LinkNode,
      ],
      theme: editorTheme,
    }),
    [initialValue, inputFormat, readOnly],
  );
  const autoId = useId();

  const handleChange = useCallback(
    (_: EditorState, editor: LexicalEditor) => {
      editor.getEditorState().read(() => {
        onChange?.(getOutput(editor));
      });
    },
    [onChange],
  );

  return (
    <>
      {(label || description) && (
        <FormLabel id={autoId}>
          {label && (
            <Typography variant="text14" fontWeight={700}>
              {label}
            </Typography>
          )}
          {description && <Typography variant="text14">{description}</Typography>}
        </FormLabel>
      )}
      <LexicalComposer initialConfig={initialConfig}>
        <StyledEditorContainer $disabled={readOnly} $error={error}>
          {!readOnly && (
            <StyledToolbarContainer py={0.5} px={1.5}>
              <ToolbarPlugin />
            </StyledToolbarContainer>
          )}
          <StyledContentEditableWrapper>
            <RichTextPlugin
              contentEditable={<StyledContentEditable ariaLabelledBy={autoId} />}
              placeholder={
                <StyledPlaceholder px={2} py={1} color="neutral.400">
                  {placeholder}
                </StyledPlaceholder>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
          </StyledContentEditableWrapper>
          <OnChangePlugin onChange={handleChange} ignoreSelectionChange ignoreHistoryMergeTagChange />
          {onFocus && <OnFocusPlugin onFocus={onFocus} />}
          <HistoryPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          {maxLength && <MaxLengthPlugin maxLength={maxLength} />}
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </StyledEditorContainer>
      </LexicalComposer>
      {helperText && (
        <FormHelperText variant="text12" color={error ? 'error.main' : 'neutral.main'}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};
