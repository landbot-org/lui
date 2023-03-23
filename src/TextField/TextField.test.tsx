import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../test-utils';

import { TextField } from './TextField';

describe('TextField', () => {
  it('should render textbox', () => {
    const { getByRole } = render(<TextField />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const { getByRole } = render(<TextField disabled />);

    expect(getByRole('textbox')).toBeDisabled();
  });

  it('should display value', () => {
    const { getByDisplayValue } = render(<TextField value="Value" />);

    expect(getByDisplayValue('Value')).toBeInTheDocument();
  });

  it('should render label', () => {
    const { getByLabelText } = render(<TextField id="textfield-id" label="Label" />);

    expect(getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render description', () => {
    const { getByLabelText } = render(<TextField id="textfield-id" description="Description" />);

    expect(getByLabelText('Description')).toBeInTheDocument();
  });

  it('should render label and description', () => {
    const { getByLabelText } = render(<TextField id="textfield-id" label="Label" description="Description" />);

    expect(getByLabelText('LabelDescription')).toBeInTheDocument();
  });

  it('should render start adornment', () => {
    const { getByRole } = render(<TextField startAdornment={<button />} />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should render end adornment', () => {
    const { getByRole } = render(<TextField endAdornment={<span role="img" />} />);

    expect(getByRole('img')).toBeInTheDocument();
  });

  it('should render helper text', () => {
    const { getByText } = render(<TextField helperText="Helper text" />);

    expect(getByText('Helper text')).toBeInTheDocument();
  });

  it('should focus input on inner click', () => {
    const { getByRole } = render(<TextField />);
    const input = getByRole('textbox');
    fireEvent.click(input);

    expect(input).toHaveFocus();
  });

  it('should not focus input on start adornment click', () => {
    const { getByRole } = render(<TextField startAdornment={<button />} />);

    fireEvent.click(getByRole('button'));

    expect(getByRole('textbox')).not.toHaveFocus();
  });

  it('should not focus input on end adornment click', () => {
    const { getByRole } = render(<TextField endAdornment={<button />} />);

    fireEvent.click(getByRole('button'));

    expect(getByRole('textbox')).not.toHaveFocus();
  });

  it('should render on error state', () => {
    const { getByRole } = render(<TextField error />);

    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
