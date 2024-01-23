import { render } from '../../test-utils';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders by default', async () => {
    const { findByRole } = render(<Divider />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('render horizontally', async () => {
    const { findByRole } = render(<Divider orientation="horizontal" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('renders vertically', async () => {
    const { findByTestId } = render(<Divider data-testid="content-divider" orientation="vertical" />);
    expect(await findByTestId('content-divider')).toBeInTheDocument();
  });

  it('should render horizontal small divider', async () => {
    const { findByRole } = render(<Divider orientation="horizontal" size="small" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render horizontal medium divider', async () => {
    const { findByRole } = render(<Divider orientation="horizontal" size="medium" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render horizontal large divider', async () => {
    const { findByRole } = render(<Divider orientation="horizontal" size="large" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render vertical small divider', async () => {
    const { findByRole } = render(<Divider orientation="vertical" size="small" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render vertical medium divider', async () => {
    const { findByRole } = render(<Divider orientation="vertical" size="medium" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render vertical large divider', async () => {
    const { findByRole } = render(<Divider orientation="vertical" size="large" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render horizontal divider with color', async () => {
    const { findByRole } = render(<Divider color="orange.main" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });

  it('should render vertical divider with color', async () => {
    const { findByRole } = render(<Divider orientation="vertical" color="orange.main" />);
    expect(await findByRole('separator')).toBeInTheDocument();
  });
});
