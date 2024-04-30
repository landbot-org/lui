import { TextareaHTMLAttributes } from 'react';

export type Resize = 'none' | 'both' | 'horizontal' | 'vertical';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: boolean;
  helperText?: string;
  fullHeight?: boolean;
  resize?: Resize;
}
