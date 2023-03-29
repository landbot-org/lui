import React from 'react';
import { render, screen } from '../test-utils';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('should render textbox', () => {
    render(<TextArea />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('can be disabled with the prop "disabled"', () => {
    render(<TextArea disabled />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('should display value', () => {
    render(<TextArea value="Value" />);

    expect(screen.getByDisplayValue('Value')).toBeInTheDocument();
  });

  it('should render label', () => {
    render(<TextArea id="textfield-id" label="Label" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
  });

  it('should render description', () => {
    render(<TextArea id="textfield-id" description="Description" />);

    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('should render label and description', () => {
    render(<TextArea id="textfield-id" label="Label" description="Description" />);

    expect(screen.getByLabelText('LabelDescription')).toBeInTheDocument();
  });

  it('should render helper text', () => {
    render(<TextArea helperText="Helper text" />);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('should render helper text on error state', () => {
    render(<TextArea helperText="Helper text" error />);

    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });
});
