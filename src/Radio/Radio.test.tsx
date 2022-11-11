import React, { useState } from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '../test-utils';

import { Radio } from './Radio';

const StatefulRadioGroup = () => {
  const [checkedValue, setCheckedValue] = useState<string>();

  return (
    <>
      {['Radio A', 'Radio B', 'Radio C'].map((label, index) => (
        <label key={index}>
          <Radio checked={checkedValue === label} name="Name" onChange={() => setCheckedValue(label)} />
          {label}
        </label>
      ))}
    </>
  );
};

describe('Radio', () => {
  it('should render radio', () => {
    const { getByRole } = render(<Radio />);
    expect(getByRole('radio')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const { getByRole } = render(<Radio disabled />);
    expect(getByRole('radio')).toBeDisabled();
  });

  it('should be checked', () => {
    const { getByRole } = render(<Radio checked />);
    expect(getByRole('radio')).toBeChecked();
  });

  it('should render when checked and disabled', () => {
    const { getByRole } = render(<Radio checked disabled />);
    expect(getByRole('radio')).toBeChecked();
    expect(getByRole('radio')).toBeDisabled();
  });

  it('should be named', () => {
    const { getByRole } = render(<Radio name="Name" />);
    expect(getByRole('radio')).toHaveAttribute('name', 'Name');
  });

  it('should call onChange when click event fired', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Radio onChange={onChange} />);

    fireEvent.click(getByRole('radio'));

    expect(onChange).toHaveBeenCalled();
  });

  describe('Radio Group', () => {
    it('should check the clicked radio input', () => {
      const { getByRole } = render(<StatefulRadioGroup />);
      const firstRadioInput = getByRole('radio', { name: 'Radio A' });
      const secondRadioInput = getByRole('radio', { name: 'Radio B' });

      fireEvent.click(firstRadioInput);

      expect(firstRadioInput).toBeChecked();

      fireEvent.click(secondRadioInput);

      expect(firstRadioInput).not.toBeChecked();
      expect(secondRadioInput).toBeChecked();
    });
  });
});
