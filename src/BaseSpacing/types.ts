type SPACING_OPTIONS =
  | 0.25
  | 0.5
  | 1
  | 1.5
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 15
  | 20;

export interface BaseSpacingProps {
  m?: SPACING_OPTIONS;
  mt?: SPACING_OPTIONS;
  mr?: SPACING_OPTIONS;
  mb?: SPACING_OPTIONS;
  ml?: SPACING_OPTIONS;
  mx?: SPACING_OPTIONS;
  my?: SPACING_OPTIONS;
  p?: SPACING_OPTIONS;
  pt?: SPACING_OPTIONS;
  pr?: SPACING_OPTIONS;
  pb?: SPACING_OPTIONS;
  pl?: SPACING_OPTIONS;
  px?: SPACING_OPTIONS;
  py?: SPACING_OPTIONS;
}
