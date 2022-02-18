import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Memory from "./Memory/Memory";
import MemorySkeleton from './Memory/MemorySkeleton';

import useStyles from './styles';

const Memories = ({ setCurrentId }) => {
  const classes = useStyles();
  const memories = useSelector((state) => state.memories);

  return (
    <Grid
      className={classes.mainContainer}
      alignItems="stretch"
      spacing={3}
      container
    >
      {!memories.length ? (
        <>
          <MemorySkeleton />
          <MemorySkeleton />
          <MemorySkeleton />
        </>
      ) :
        memories.map((memory) => (
          <Grid
            key={memory._id}
            xs={12}
            sm={12}
            md={6}
            item
          >
            <Memory memory={memory} setCurrentId={setCurrentId} />
          </Grid>
        ))}
    </Grid>
  )
}

export default Memories;