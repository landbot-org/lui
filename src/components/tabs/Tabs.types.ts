export type TabSizeTypes = 'small' | 'medium' | 'large';

export interface TabProps {
  active?: boolean;
  className: string;
  direction: 'right' | 'left';
  disabled?: boolean;
  label: string;
  onClick: () => void;
  ref: string;
  size: TabSizeTypes;
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
  size?: TabSizeTypes;
  value?: number;
  showBottomLine?: boolean;
}
