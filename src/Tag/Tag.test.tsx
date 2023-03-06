import React from 'react';
import { render } from '../test-utils';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Tag } from './Tag';

describe('Tag component', () => {
  it('should render the component with default props', () => {
    render(<Tag label="Tag Label" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with custom text color', () => {
    render(<Tag label="Tag Label" textColor="white.main" />);
    const tag = screen.getByText(/Tag Label/i);
    expect(tag).toBeInTheDocument();
  });

  it('should render the component with custom background color', () => {
    render(<Tag label="Tag Label" backgroundColor="purple.main" />);
    const tag = screen.getByText(/Tag Label/i);
    expect(tag).toBeInTheDocument();
  });

  it('should render the component with custom border color', () => {
    render(<Tag label="Tag Label" borderColor="purple.700" />);
    const tag = screen.getByText(/Tag Label/i);
    expect(tag).toBeInTheDocument();
  });

  it('should render the component with outlined variant', () => {
    render(<Tag label="Tag Label" variant="outlined" />);
    const tag = screen.getByText(/Tag Label/i);
    expect(tag).toBeInTheDocument();
  });

  it('should render the component with filled variant', () => {
    render(<Tag label="Tag Label" variant="filled" />);
    const tag = screen.getByText(/Tag Label/i);
    expect(tag).toBeInTheDocument();
  });

  it('should call onClickEndIcon when endIcon is clicked', () => {
    const handleClick = jest.fn();
    render(
      <Tag
        label="Tag Label"
        endIcon={<FontAwesomeIcon aria-label="end icon" icon={faXmark} />}
        onClickEndIcon={handleClick}
      />
    );
    userEvent.click(screen.getByLabelText(/end icon/i));
    expect(handleClick).toHaveBeenCalled();
  });
});
