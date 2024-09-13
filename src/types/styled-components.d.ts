import 'styled-components';
import { Theme } from '../shared/theme.types';

declare module 'styled-components' {
  export type DefaultTheme = Theme;
}
