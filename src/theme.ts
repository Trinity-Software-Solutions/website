import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#0ca678', 
      light: '#10b981',
      dark: '#099268',
      contrastText: '#ffffff',
    },
    secondary: {
      main: mode === 'light' ? '#0f172a' : '#f8fafc',
      light: '#1e293b',
      dark: '#020617',
      contrastText: '#ffffff',
    },
    info: {
      main: '#3b82f6',
      light: '#60a5fa',
      dark: '#2563eb',
    },
    success: {
      main: '#10b981',
      light: '#ecfdf5',
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#0f172a',
      paper: mode === 'light' ? '#ffffff' : '#1e293b',
    },
    text: {
      primary: mode === 'light' ? '#0f172a' : '#f8fafc',
      secondary: mode === 'light' ? '#64748b' : '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, color: mode === 'light' ? '#0f172a' : '#ffffff' },
    h2: { fontWeight: 700, color: mode === 'light' ? '#0f172a' : '#ffffff' },
    h3: { fontWeight: 700, color: mode === 'light' ? '#0f172a' : '#ffffff' },
    h4: { fontWeight: 600, color: mode === 'light' ? '#0f172a' : '#ffffff' },
    h5: { fontWeight: 600, color: mode === 'light' ? '#0f172a' : '#ffffff' },
    h6: { fontWeight: 600, color: mode === 'light' ? '#0f172a' : '#ffffff' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            background: 'linear-gradient(135deg, #10b981 0%, #0ca678 100%)',
            color: '#ffffff',
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === 'light' ? '0px 10px 20px rgba(0,0,0,0.05)' : '0px 10px 20px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' ? '#ffffff' : '#0f172a',
          color: mode === 'light' ? '#1e293b' : '#f8fafc',
          boxShadow: '0px 1px 3px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default getTheme;
