import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMemory, updateMemory } from '../../actions/memories';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

import useStyles from './styles';

const initialState = {
  creator: '',
  title: '',
  message: '',
  tags: '',
  selectedFile: '',
};

const Form = ({ currentId, setCurrentId }) => {
  const [memoryData, setMemoryData] = useState(initialState);
  const currentMemory = useSelector((state) => 
    currentId ? state.memories.find((m) => m._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if(currentMemory) setMemoryData(currentMemory);
  }, [currentMemory])  

  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updateMemory(currentId, memoryData));
    } else {
      dispatch(createMemory(memoryData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setMemoryData({ ...initialState });
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
          {currentId ? 'Edite' : 'Registre'} sua Memória
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
            setMemoryData({ ...memoryData, tags: e.target.value.split(',') })
          }
        />

        <div className={classes.fileInput}>
          {
            memoryData.selectedFile && (
              <img src={memoryData.selectedFile} alt="Imagem Enviada" />
            )
          }
          <FileBase 
            type="file"
            multiple={false}
            onDone={
              ({ base64 }) => setMemoryData({ ...memoryData, selectedFile: base64 })
            }
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