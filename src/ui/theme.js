import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#faedeb',
      main: '#f78da7',
    },
    neutral: {
      black: '#313437',
    },
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
  },

  borderRadius: {
    tiny: '.3rem',
  },

  boxShadow: {
    light: '0 44px 24px rgba(237,239,241,.15)',
  },

  components: {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
});

export default theme;
