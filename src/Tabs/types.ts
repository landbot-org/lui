export type SizeTypes = 'small' | 'medium' | 'large';

export interface TabProps {
  active?: boolean;
  className: string;
  direction: 'right' | 'left';
  disabled?: boolean;
  label: string;
  onClick: () => void;
  ref: string;
  size: SizeTypes;
  showBottomLine?: boolean;
}

export interface TabsItem {
  label: string;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabsItem[];
  onChange: (activeItem: number) => void;
  showScrollButtons?: boolean;
  size?: SizeTypes;
  value?: number;
  showBottomLine?: boolean;
}
