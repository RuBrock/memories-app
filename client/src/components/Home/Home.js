import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMemories } from '../../actions/memories';
import { Container, Grow, Grid } from '@mui/material';
import Memories from '../../components/Memories/Memories';
import Form from '../../components/Form/Form';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemories());
  }, [dispatch])

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={7}>
            <Memories setCurrentId={setCurrentId} />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;