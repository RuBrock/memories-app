import Memory from "./Memory/Memory";

import useStyles from './styles';

const Memories = () => {
  const classes = useStyles();
  return (
    <>
      <h3>Memories</h3>
      <Memory />
      <Memory />
    </>
  );
}

export default Memories;