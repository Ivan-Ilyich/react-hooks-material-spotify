import { createTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export default () =>
  createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
    },
    mainContainer: {
      padding: '30px',
    },
  });
