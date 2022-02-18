import { useState } from 'react';
import { 
  Avatar, 
  Button, 
  Paper, 
  Grid, 
  Typography, 
  Container
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };

  const handleShowPassword = () => 
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography variant="h5">
          {isSignup ? 'Cadastrar conta' : 'Entrar'}
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input
                    name="firstName" 
                    label="Nome"
                    onChange={handleChange}
                    autoFocus
                    half
                  />

                  <Input
                    name="secondName" 
                    label="Sobrenome"
                    onChange={handleChange}
                    half
                  />
                </>
              )
            }
            <Input
              name="email" 
              label="E-mail"
              onChange={handleChange}
              type="email"
            />

            <Input
              name="password" 
              label="Senha"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            { isSignup && 
              <Input 
                name="confirmPassword" 
                label="Confirme sua senha" 
                handleChange={handleChange} 
                type="password"
              />
            }
          </Grid>

          <Button 
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submit}
          >
            { isSignup ? 'Cadastrar conta' : 'Entrar'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup 
                    ? 'Já possui uma conta? Fazer login.' 
                    : 'Não possui uma conta? Criar nova conta.'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth;