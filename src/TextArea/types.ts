export interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: boolean;
  helperText?: string;
}
