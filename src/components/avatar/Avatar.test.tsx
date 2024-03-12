import { render, screen } from '../../test-utils';
import { Avatar } from './Avatar';
import { AVATAR_STATUS, AvatarProps } from './Avatar.types';

const renderComponent = (props: Partial<AvatarProps> = {}) => render(<Avatar {...props} />);

describe('Avatar', () => {
  it('should render default', () => {
    renderComponent();

    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('should render without status', () => {
    renderComponent({ showStatus: false });

    expect(screen.queryByLabelText('online')).toBeFalsy();
    expect(screen.queryByLabelText('offline')).toBeFalsy();
    expect(screen.queryByLabelText('busy')).toBeFalsy();
    expect(screen.queryByLabelText('away')).toBeFalsy();
  });

  it('should render with online status', () => {
    renderComponent({ status: AVATAR_STATUS.ONLINE });

    expect(screen.getByLabelText('online')).toBeTruthy();
  });

  it('should render with offline status', () => {
    renderComponent({ status: AVATAR_STATUS.OFFLINE });

    expect(screen.getByLabelText('offline')).toBeTruthy();
  });

  it('should render with busy status', () => {
    renderComponent({ status: AVATAR_STATUS.BUSY });

    expect(screen.getByLabelText('busy')).toBeTruthy();
  });

  it('should render with away status', () => {
    renderComponent({ status: AVATAR_STATUS.AWAY });

    expect(screen.getByLabelText('away')).toBeTruthy();
  });
});
