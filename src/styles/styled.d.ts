import 'styled-components';
import { Theme } from '../types/context/themeContext';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
