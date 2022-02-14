import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';
import Memory from "./Memory/Memory";

import useStyles from './styles';

const Memories = () => {
  const classes = useStyles();
  const memories = useSelector((state) => state.memories);

  console.log(memories);

  return (
    !memories.length ? <CircularProgress /> : (
      <Grid 
        className={classes.mainContainer} 
        alignItems="stretch"
        spacing={3}
        container
      >
        {memories.map((memory) => (
          <Grid 
            key={memory._id}
            xs={12} 
            sm={12} 
            md={6}
            item
          >
            <Memory memory={memory} />
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Memories;