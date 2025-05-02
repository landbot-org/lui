import { render } from '../../test-utils';
import { BaseSpacing } from './BaseSpacing';

describe('BaseSpacing', () => {
  it('renders by default', () => {
    const { container } = render(<BaseSpacing />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with m', () => {
    const { container } = render(<BaseSpacing $m={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with mt', () => {
    const { container } = render(<BaseSpacing $mt={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with mr', () => {
    const { container } = render(<BaseSpacing $mr={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with mb', () => {
    const { container } = render(<BaseSpacing $mb={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with ml', () => {
    const { container } = render(<BaseSpacing $ml={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with mx', () => {
    const { container } = render(<BaseSpacing $mx={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with my', () => {
    const { container } = render(<BaseSpacing $my={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with p', () => {
    const { container } = render(<BaseSpacing $p={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with pt', () => {
    const { container } = render(<BaseSpacing $pt={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with pr', () => {
    const { container } = render(<BaseSpacing $pr={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with pb', () => {
    const { container } = render(<BaseSpacing $pb={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with pl', () => {
    const { container } = render(<BaseSpacing $pl={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with px', () => {
    const { container } = render(<BaseSpacing $px={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
  it('renders with py', () => {
    const { container } = render(<BaseSpacing $py={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
