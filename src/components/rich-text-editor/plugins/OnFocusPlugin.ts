import { useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { COMMAND_PRIORITY_LOW, FOCUS_COMMAND } from 'lexical';

export const OnFocusPlugin = ({ onFocus }: { onFocus: () => void }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      FOCUS_COMMAND,
      () => {
        onFocus();
        return false;
      },
      COMMAND_PRIORITY_LOW,
    );
  }, [editor, onFocus]);

  return null;
};
