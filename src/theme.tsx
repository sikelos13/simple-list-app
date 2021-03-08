import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

//Instabox theme palette
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff3e3e',
      dark: '#ffadad'
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
    overrides: {
      MuiButton: {
        containedPrimary: {
          color: '#ffffff',
        },
      },
      MuiTableHead: {
        root: {
          backgroundColor: '#ffe6e6',
        }
      }
    }
});

export default theme;
