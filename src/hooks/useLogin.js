import { useState } from 'react';
import axios from 'axios';

const useGetUser = () => {
  const getUser = async (username) => {
    const response = await axios.get(
      `https://65305bc56c756603295e8df4.mockapi.io/api/v1/users?username=${username}`
    );
    return response.data[0];
  };

  // a los efectos practicos de un ejercicio de codigo, la respuesta del endpoint nos devuelve el usuario y password,
  // pero esto deberia quedar encriptando la informacion sensible del usuario como buena practica utilizando un token y un hash
  // validar el usuario y contraseña

  return { getUser };
};

export default useGetUser;
