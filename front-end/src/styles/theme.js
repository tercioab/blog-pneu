import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  spacing: [0, 2, 3, 5, 8],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    
    box: {
      border: '1px solid black'
    }
  },

  background: {
   default: "#19857b"
  },

  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;