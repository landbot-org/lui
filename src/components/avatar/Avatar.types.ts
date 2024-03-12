export enum AVATAR_STATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
  BUSY = 'busy',
  AWAY = 'away',
}

export type AvatarSize = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  avatar?: string;
  status?: AVATAR_STATUS;
  showStatus?: boolean;
  size?: AvatarSize;
  rounded?: boolean;
}
