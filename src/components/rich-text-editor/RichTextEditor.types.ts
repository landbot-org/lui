import { ReactNode } from 'react';

export type Formats = 'html' | 'json' | 'text' | 'markdown';

export interface RichTextEditorProps {
  className?: string;
  inputFormat?: Formats;
  onChange?: ({
    htmlString,
    jsonString,
    markdownString,
    text,
  }: {
    htmlString: string;
    jsonString: string;
    markdownString: string;
    text: string;
  }) => void;
  onFocus?: () => void;
  placeholder?: string;
  readOnly?: boolean;
  error?: boolean;
  initialValue?: string;
  label?: string;
  description?: string;
  helperText?: ReactNode | null;
  maxLength?: number;
}
