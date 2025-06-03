import { Theme } from '../types/context/themeContext';

export const ThemeBase: Theme = {
  layout: {
    width: {
      menuClose: 80, // Largura do menu fechado
      menuOpen: 300,
      container: 0
    },
    height: {
      header: 60,
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
      terciary: ''
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
      primary: '#F1F8E9', // Bege Claro (fundo principal)
      secondary: '#81C784', // Verde Menta (fundo secundário)
      terciary: '#FFFFFF', // Branco (fundo terciário)
    },
    text: '#388E3C', // Verde Floresta (texto principal)
    border: '#B0BEC5', // Cinza Claro (borda)
    hover: '#4CAF50', // Verde Folha (hover geral)
    active: '#388E3C', // Verde Floresta (ativo geral)
    button: {
      primary: '#4CAF50', // Verde Folha (botão padrão)
      hover: '#388E3C', // Verde Floresta (hover do botão)
      active: '#2E7D32', // Verde Floresta escuro (ativo botão)
      disable: '#B0BEC5', // Cinza Claro (botão desabilitado)
      submit: '#388E3C', // Verde Floresta (botão de submit)
      floating: '#81C784', // Verde Menta (botão flutuante)
    },
    label: {
      login: '#556B2F', // Verde Oliva escuro (labels)
    },
  }
};

export const darkTheme: Theme = {
  ...ThemeBase,
  colors: {
    background: {
      primary: '#121A12', // Verde muito escuro (quase preto com fundo verde)
      secondary: '#263326', // Cinza escuro esverdeado
      terciary: '#3A4A3A', // Verde escuro acinzentado
    },
    text: '#E0E0E0', // Cinza claro para texto
    border: '#4A5A4A', // Verde acinzentado médio para bordas
    hover: '#2E7D32', // Verde floresta para hover
    active: '#1B5E20', // Verde escuro para estados ativos
    button: {
      primary: '#2E7D32', // Verde floresta (botão padrão)
      hover: '#1B5E20', // Verde escuro (hover do botão)
      active: '#145214', // Verde escuro mais forte (ativo botão)
      disable: '#555555', // Cinza escuro para botão desabilitado
      submit: '#4CAF50', // Verde folha (botão submit, destaque)
      floating: '#81C784', // Verde menta para botão flutuante
    },
    label: {
      login: '#A5D6A7', // Verde claro acinzentado para labels
    },
  }
};
