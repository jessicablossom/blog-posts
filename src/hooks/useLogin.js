import axios from 'axios';

const ENDPOINT_URL =
  'https://65305bc56c756603295e8df4.mockapi.io/api/v1/users?username=';

const useGetUser = () => {
  const getUser = async (username) => {
    const response = await axios.get(`${ENDPOINT_URL}${username}`);
    return response.data[0];
  };

  // A los efectos prácticos de un ejercicio de código, la respuesta del endpoint nos devuelve el usuario y contraseña,
  // pero esto debería quedar encriptando la información sensible del usuario como buena práctica utilizando un token y un hash.
  // Validar el usuario y contraseña.

  return { getUser };
};

export default useGetUser;
