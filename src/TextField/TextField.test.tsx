import React from 'react';
import { render, screen } from '../test-utils';
import { TextField } from './TextField';

describe('TextField', () => {
  it('should render textbox', () => {
    render(<TextField />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<TextField disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should display value', () => {
    render(<TextField value="Value" />);

    expect(screen.getByDisplayValue('Value')).toBeInTheDocument();
  });

  it('should render label', () => {
    render(<TextField id="textfield-id" label="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<TextField id="textfield-id" description="Description" />);

    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('should render label and description', () => {
    render(<TextField id="textfield-id" label="Label" description="Description" />);

    expect(screen.getByLabelText('LabelDescription')).toBeInTheDocument();
  });

  it('should render start adornment', () => {
    render(<TextField startAdornment={<button />} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render end adornment', () => {
    render(<TextField endAdornment={<span role="img" />} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should render helper text', () => {
    render(<TextField helperText="Helper text" />);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should focus input on inner click', async () => {
    const { user } = render(<TextField />);
    const input = screen.getByRole('textbox');

    await user.click(input);

    expect(input).toHaveFocus();
  });

  it('should not focus input on start adornment click', async () => {
    const { user } = render(<TextField startAdornment={<button />} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('textbox')).not.toHaveFocus();
  });

  it('should not focus input on end adornment click', async () => {
    const { user } = render(<TextField endAdornment={<button />} />);

    await user.click(screen.getByRole('button'));

    expect(screen.getByRole('textbox')).not.toHaveFocus();
  });

  it('should render on error state', () => {
    render(<TextField error />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render helper text on error state', () => {
    render(<TextField helperText="Helper text" error />);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });
});
