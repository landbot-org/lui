import { ReactNode, TextareaHTMLAttributes } from 'react';

export type Resize = 'none' | 'both' | 'horizontal' | 'vertical';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: boolean;
  helperText?: ReactNode | null;
  fullHeight?: boolean;
  resize?: Resize;
}
