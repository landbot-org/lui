export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  endAdornment?: React.ReactNode;
  helperText?: string;
  startAdornment?: React.ReactNode;
}
