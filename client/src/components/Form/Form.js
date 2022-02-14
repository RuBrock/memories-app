import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMemory } from '../../actions/memories';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const Form = () => {
  const [memoryData, setMemoryData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createMemory(memoryData));
  };

  const clear = () => {

  };

  return (
    <Paper className={classes.paper}>
      <form 
        className={`${classes.root} ${classes.form}`}
        autoComplete='off' 
        noValidate 
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          Registre sua Memória
        </Typography>

        <TextField 
          name='creator' 
          variant='outlined' 
          label='Criador'
          fullWidth
          value={memoryData.creator}
          onChange={(e) => 
            setMemoryData({ ...memoryData, creator: e.target.value })
          }
        />
        <TextField 
          name='title' 
          variant='outlined' 
          label='Título'
          fullWidth
          value={memoryData.title}
          onChange={(e) => 
            setMemoryData({ ...memoryData, title: e.target.value })
          }
        />
        <TextField 
          name='message' 
          variant='outlined' 
          label='Mensagem'
          fullWidth
          value={memoryData.message}
          onChange={(e) => 
            setMemoryData({ ...memoryData, message: e.target.value })
          }
        />
        <TextField 
          name='tags' 
          variant='outlined' 
          label='Tags'
          fullWidth
          value={memoryData.tags}
          onChange={(e) => 
            setMemoryData({ ...memoryData, tags: e.target.value })
          }
        />

        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({ base64 }) => setMemoryData({ ...memoryData, selectedFile: base64 })}
          />
        </div>

        <Button 
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Enviar
        </Button>
        <Button 
          variant='outlined'
          color='error'
          size='small'
          type='button'
          onClick={clear}
          fullWidth
        >
          Limpar
        </Button>
      </form>
    </Paper>
  );
}

export default Form;