export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  endAdornment?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  startAdornment?: React.ReactNode;
}
