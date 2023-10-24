const useCookie = () => {
  const userIdCookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith('userId='));

  return userIdCookie;
};

export default useCookie;
