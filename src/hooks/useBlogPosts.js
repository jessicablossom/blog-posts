import { useState } from 'react';
import axios from 'axios';

//   este hook lo vamos a utilizar para centralizar los request de axios
// y que nuestros componentes puedan interactuar con la data del blog
//  tanto para traer sus posts, agregar, editar o borrarlos.

const ENDPOINT_URL =
  'https://65305bc56c756603295e8df4.mockapi.io/api/v1/blogposts';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // obtenemos los posts de la api y populando un useState con los valores ya ordenados por fecha de creacion
  const getPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(ENDPOINT_URL);
      const sortedPosts = response.data.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      setPosts(sortedPosts);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // agregamos un post al array de posts
  const addPost = async (newBlogPost) => {
    try {
      const response = await axios.post(ENDPOINT_URL, newBlogPost);
      const updatedPosts = [response.data, ...posts];
      const sortedPosts = updatedPosts.sort(
        (a, b) => b.createdAt - a.createdAt
      );
      setPosts(sortedPosts);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  // borramos un elemento de ese array, utilizando el id
  const deletePost = async (id) => {
    try {
      await axios.delete(`${ENDPOINT_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  return {
    posts,
    loading,
    error,
    getPosts,
    addPost,
    deletePost,
  };
};

export default usePosts;
