import { fireEvent, render, screen } from '../../test-utils';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders default', () => {
    render(<Toggle readOnly />);
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });

  it('renders size small', () => {
    render(<Toggle size="small" readOnly />);
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });

  it('should have a given attribute', () => {
    render(<Toggle data-test="true" readOnly />);
    expect(screen.getByRole('checkbox').getAttribute('data-test')).toBe('true');
  });

  it('should checked property', () => {
    render(<Toggle checked readOnly />);

    expect(screen.getByRole('checkbox')).toHaveProperty('checked', true);
  });

  it('should disabled property', () => {
    render(<Toggle disabled readOnly />);

    expect(screen.getByRole('checkbox')).toHaveProperty('disabled', true);
  });

  it('should trigger onChange', () => {
    const onChangeMock = jest.fn();

    render(<Toggle onChange={onChangeMock} />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeTruthy();

    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalled();
  });
});
