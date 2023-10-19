import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import classes from './style.module.scss';
import usePosts from './../../hooks/useBlogPosts';
import BlogPostList from '../../components/BlogList/BlogList';
import BlogModal from '../../components/BlogModal/BlogModal';
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
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.mainTitle} variant="h2">
        Blog
      </Typography>
      <Button
        className={classes.buttonOutlined}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Agregar +
      </Button>
      {loading ? <Loader /> : <BlogPostList posts={posts} />}
      {open && (
        <BlogModal open={open} handleClose={handleClose} addPost={addPost} />
      )}
    </Container>
  );
};

export default Blog;
