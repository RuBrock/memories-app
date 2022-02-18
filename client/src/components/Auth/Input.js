import { 
  Grid, 
  TextField,
  InputAdornment,
  IconButton
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({ 
  half, 
  name, 
  label, 
  handleChange, 
  autoFocus,
  type,
  handleShowPassword
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
        name={name}
        label={label}
        onChange={handleChange}
        autoFocus={autoFocus}
        type={type}
        InputProps={name === 'password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {
                  type === 'password' 
                    ? <VisibilityIcon /> 
                    : <VisibilityOffIcon />
                }
              </IconButton>
            </InputAdornment>
          )
        } : null}
        variant="outlined"
        required
        fullWidth
      />
    </Grid>
  )
}

export default Input;