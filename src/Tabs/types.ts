export type SizeTypes = 'small' | 'medium' | 'large';

export interface TabProps {
  index: number;
  label: string;
  direction: 'right' | 'left';
  disabled?: boolean;
  active?: boolean;
  ref: string;
  size: SizeTypes;
}

export interface TabsProps {
  tabs: TabProps[];
  onChange: (number) => void;
  showScrollButtons?: boolean;
  size?: SizeTypes;
}
