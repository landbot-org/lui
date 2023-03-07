export interface TextFieldProps {
  label?: string;
  description?: string;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  helperText?: string;
  id?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
  startAdornment?: React.ReactNode;
}
