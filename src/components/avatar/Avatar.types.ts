export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps {
  avatar?: string;
  name?: string;
  status?: AvatarStatus;
  email?: string;
  size?: number;
  color?: 'blue' | 'white';
  rounded?: boolean;
  className?: string;
}
