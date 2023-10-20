import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Stack } from '@mui/material';
import './index.css';
import usePosts from './../../hooks/useBlogPosts';
import BlogPostList from '../../components/BlogList/BlogList';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import Loader from '../../components/Loader/Loader';

const Blog = () => {
  const { loading, posts, getPosts, addPost } = usePosts();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container maxWidth="md" className="container">
      <Typography className="main-title" variant="h2">
        Blog
      </Typography>
      <Button
        className="button-outlined"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Agregar +
      </Button>
      {loading ? (
        <Loader />
      ) : posts.length > 0 ? (
        <BlogPostList posts={posts} />
      ) : (
        <Stack className="center-row">
          <Typography className="main-title" variant="h4">
            No hay posts
          </Typography>
          <Typography className="secondary-text" variant="h6">
            Agregá uno nuevo
          </Typography>
        </Stack>
      )}
      {open && (
        <AddPostForm open={open} handleClose={handleClose} addPost={addPost} />
      )}
    </Container>
  );
};

export default Blog;
