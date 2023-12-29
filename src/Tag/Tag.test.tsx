import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { render, screen } from '../test-utils';
import { Tag } from './Tag';

describe('Tag component', () => {
  it('should render the component with default props', () => {
    render(<Tag label="Tag Label" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with custom text color', () => {
    render(<Tag label="Tag Label" color="white.main" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with custom background color', () => {
    render(<Tag label="Tag Label" backgroundColor="purple.main" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with custom border color', () => {
    render(<Tag label="Tag Label" borderColor="purple.700" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with outlined variant', () => {
    render(<Tag label="Tag Label" variant="outlined" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with filled variant', () => {
    render(<Tag label="Tag Label" variant="filled" />);
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });

  it('should render the component with adornments', () => {
    const handleClick = jest.fn();
    render(
      <Tag
        label="Tag Label"
        startAdornment={<FontAwesomeIcon aria-label="start adornment" icon={faXmark} onClick={handleClick} />}
        endAdornment={<FontAwesomeIcon aria-label="end adornment" icon={faXmark} onClick={handleClick} />}
      />,
    );
    expect(screen.getByText(/Tag Label/i)).toBeInTheDocument();
  });
});
