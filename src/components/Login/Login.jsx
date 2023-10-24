import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  FormControl,
} from '@mui/material';
import useGetUser from './../../hooks/useLogin';
import moment from 'moment';
import './Login.css';

const Login = () => {
  const { getUser } = useGetUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await getUser(username);
      if (user && user.password === password) {
        const expirationDate = moment().add(24, 'hours').toDate();
        const cookieExpiration = expirationDate.toUTCString();
        document.cookie = `userId=${user.id}; expires=${cookieExpiration};`;
        window.location.href = '/blog';
      } else {
        setLoginMessage('Las credenciales no son válidas');
      }
    } catch (error) {
      setLoginMessage('Error al iniciar sesión');
    }
  };

  return (
    <Container className="login-container" maxWidth="sm">
      <form onSubmit={handleLogin}>
        <FormControl className="form-login" fullWidth required>
          <TextField
            label="Usuario"
            variant="filled"
            value={username}
            color="success"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Contraseña"
            variant="filled"
            type="password"
            value={password}
            color="success"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            className="button-contained"
            variant="contained"
            color="primary"
          >
            Iniciar sesión
          </Button>
          {loginMessage && <Typography>{loginMessage}</Typography>}
        </FormControl>
      </form>
    </Container>
  );
};

export default Login;
