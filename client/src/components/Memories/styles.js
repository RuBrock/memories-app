import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const themeSpace = createTheme();

export default makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: themeSpace.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}));