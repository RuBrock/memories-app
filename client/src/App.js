import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMemories } from './actions/memories';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Form from './components/Form/Form';
import Memories from './components/Memories/Memories';
import memories from './images/memories.png';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemories());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar
        className={classes.appBar} 
        position='static' 
        color='inherit'
      >
        <Typography 
          className={classes.heading}
          variant='h2' 
          align='center'>
          memories;
        </Typography>
        <img 
          className={classes.image}
          src={memories} 
          alt="memories logo" 
          height={60} 
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid 
            container 
            justifyContent="space-between" 
            alignItems="stretch" 
            spacing={3}
          >
            <Grid item xs={12} sm={12} md={7}>
              <Memories />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
