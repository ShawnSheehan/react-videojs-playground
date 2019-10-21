const darkTheme = {
  themeName: 'Dark Theme',
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#1f2324',
    },
    primary: {
      main: '#008094',
      light: '#55d6eb',
      dark: 'rgb(0, 122, 140)',
      contrastText: 'rgb(22, 24, 25)',
    },
    secondary: {
      main: '#32ffb2',
    },
    error: {
      main: '#b80000',
    },
    background: {
      paper: '#343839',
      default: 'rgb(35, 39, 40)',
    },
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgba(255,255,255,0.7)',
    },
    action: {
      focus: '#e8910a',
    },
  },
  typography: {
    fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
    },
  },
};

const lightTheme = {
  themeName: 'Light Theme',
  palette: {
    primary: {
      main: '#ff9800',
    },
    secondary: { main: 'rgb(81, 189, 206)' },
    text: {
      primary: '#b3e5fc',
    },
  },
};

export default [darkTheme, lightTheme];
