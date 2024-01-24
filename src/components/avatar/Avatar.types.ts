export enum AVATAR_STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
  BUSY = 'busy',
  AWAY = 'away',
}

export interface AvatarProps {
  avatar?: string;
  name?: string;
  status?: AVATAR_STATUS;
  email?: string;
  size?: number;
  color?: 'blue' | 'white';
  rounded?: boolean;
  className?: string;
}
