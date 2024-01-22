import React from 'react';

import { render } from '../../test-utils';
import { Robot } from '../icon/icons';
import { Button } from './Button';

describe('Button', () => {
  it('renders by default', () => {
    const { getByText } = render(<Button>default</Button>);
    expect(getByText('default')).toBeInTheDocument();
  });
  it('renders contained button', () => {
    const { getByText } = render(<Button variant="contained">contained</Button>);
    expect(getByText('contained')).toBeInTheDocument();
  });
  it('renders outlined button', () => {
    const { getByText } = render(<Button variant="outlined">outlined</Button>);
    expect(getByText('outlined')).toBeInTheDocument();
  });
  it('renders text button', () => {
    const { getByText } = render(<Button variant="text">text</Button>);
    expect(getByText('text')).toBeInTheDocument();
  });
  it('renders small button', () => {
    const { getByText } = render(<Button size="small">small</Button>);
    expect(getByText('small')).toBeInTheDocument();
  });
  it('renders medium button', () => {
    const { getByText } = render(<Button size="medium">medium</Button>);
    expect(getByText('medium')).toBeInTheDocument();
  });
  it('renders large button', () => {
    const { getByText } = render(<Button size="large">large</Button>);
    expect(getByText('large')).toBeInTheDocument();
  });
  it('renders button with pink color', () => {
    const { getByText } = render(<Button color="pink.main">pink</Button>);
    expect(getByText('pink')).toBeInTheDocument();
  });
  it('renders button with blue color', () => {
    const { getByText } = render(<Button color="blue.main">blue</Button>);
    expect(getByText('blue')).toBeInTheDocument();
  });
  it('renders button with purple color', () => {
    const { getByText } = render(<Button color="purple.main">purple</Button>);
    expect(getByText('purple')).toBeInTheDocument();
  });
  it('renders link', async () => {
    const { getByRole } = render(<Button href="https://www.landbot.io">test</Button>);
    expect(getByRole('link')).toBeInTheDocument();
  });
  it('renders disabled button', async () => {
    const { getByRole } = render(<Button disabled>test</Button>);
    expect(getByRole('button')).toBeDisabled();
  });
  it('renders full width button', async () => {
    const { getByRole } = render(<Button fullWidth>test</Button>);
    expect(getByRole('button')).toBeInTheDocument();
  });
  it('should call onClick handler', async () => {
    const onClickSpy = jest.fn();
    const { getByRole } = render(
      <Button onClick={onClickSpy} variant="text">
        test
      </Button>,
    );
    const buttonElement = getByRole('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });
  it('renders start icon and children', async () => {
    const { container, getByRole, getByText } = render(<Button startIcon={<Robot />}>test</Button>);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('renders end icon and children', async () => {
    const { container, getByRole, getByText } = render(<Button endIcon={<Robot />}>test</Button>);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
  it('renders start and end icon and children', async () => {
    const { container, getByRole, getByText } = render(
      <Button startIcon={<Robot />} endIcon={<Robot />}>
        test
      </Button>,
    );
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
    expect(container.querySelectorAll('svg')).toHaveLength(2);
  });
  it('renders start icon without children', async () => {
    const { container } = render(<Button startIcon={<Robot />} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
