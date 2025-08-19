export interface Theme {
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
    }
    text: string;
    border: string;
    hover: string;
    active: string;
    button: {
      primary: string;
      hover: string;
      active: string;
      disable: string;
      submit: string;
      floating: string;
    }
    label: {
      login: string;
    }
  },
  fonts: {
    primary: string;
    secondary: string;
  },
  layout: {
    width: {
      container: number;
      menuClose: number;
      menuOpen: number;
    },
    height: {
      container: number;
      header: number;
      footer: number;
      button: number;
      input: number;
    }
  };
}

export type ThemeType = 'light' | 'dark';

interface IThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

export type ThemeContextType = Partial<IThemeContextProps>;