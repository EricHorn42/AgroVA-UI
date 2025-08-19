import { Theme } from '../types/context/themeContext';

export const ThemeBase: Theme = {
  layout: {
    width: {
      menuClose: 80,
      menuOpen: 300,
      container: 0
    },
    height: {
      header: 40,
      container: 0,
      footer: 0,
      button: 0,
      input: 0
    }
  },
  fonts: {
    primary: '',
    secondary: ''
  },
  colors: {
    background: {
      primary: '',
      secondary: '',
      tertiary: '',
      quaternary: '',
      quinary: ''
    },
    text: '',
    border: '',
    hover: '',
    active: '',
    button: {
      primary: '',
      hover: '',
      active: '',
      disable: '',
      submit: '',
      floating: ''
    },
    label: {
      login: ''
    }
  }
};

export const lightTheme: Theme = {
  ...ThemeBase,
  colors: {
    background: {
      primary: '#bcd883',
      secondary: '#a6cd3a',
      tertiary: '#80bd50',
      quaternary: '#06a50f',
      quinary: '#0c8a02',      
    },

    text: '#000',
    border: '#07a965',
    hover: '#4CAF50',
    active: '#388E3C',
    button: {
      primary: '#4CAF50',
      hover: '#388E3C',
      active: '#2E7D32',
      disable: '#B0BEC5',
      submit: '#388E3C',
      floating: '#81C784',
    },
    label: {
      login: '#556B2F',
    },
  }
};

export const darkTheme: Theme = {
  ...ThemeBase,
  colors: {
    background: {
      primary: '#121A12',
      secondary: '#263326',
      tertiary: '#3A4A3A',
      quaternary: '',
      quinary: ''
    },
    text: '#E0E0E0',
    border: '#4A5A4A',
    hover: '#2E7D32',
    active: '#1B5E20',
    button: {
      primary: '#2E7D32',
      hover: '#1B5E20',
      active: '#145214',
      disable: '#555555',
      submit: '#4CAF50',
      floating: '#81C784',
    },
    label: {
      login: '#A5D6A7',
    },
  }
};
