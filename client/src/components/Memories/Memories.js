import { useSelector } from 'react-redux';
import Memory from "./Memory/Memory";

import useStyles from './styles';

const Memories = () => {
  const classes = useStyles();
  const memories = useSelector((state) => state.memories);

  console.log(memories);

  return (
    <>
      <h3>Memories</h3>
      <Memory />
      <Memory />
    </>
  );
}

export default Memories;