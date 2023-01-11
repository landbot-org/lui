export type SizeTypes = 'small' | 'medium' | 'large';

export interface TabProps {
  label: string;
  disabled?: boolean;
  $active?: boolean;
  $ref: string;
  $size: SizeTypes;
}

export interface TabsProps {
  tabs: TabProps[];
  onChange: (number) => void;
  showScrollButtons?: boolean;
  size?: SizeTypes;
}
