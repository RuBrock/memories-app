import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const themeBreakpoint = createTheme();

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row !important',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [themeBreakpoint.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse !important',
    },
  }
}));