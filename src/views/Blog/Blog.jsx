import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Stack } from '@mui/material';
import usePosts from './../../hooks/useBlogPosts';
import BlogPostList from '../../components/BlogList/BlogList';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import Loader from '../../components/Loader/Loader';
import './Blog.css';

const Blog = () => {
	const { loading, fetchPosts, getPosts } = usePosts();
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		fetchPosts();
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<Container maxWidth='md' className='container'>
			<Typography className='main-title' variant='h2'>
				Blog
			</Typography>

			<Button id='add' size='medium' variant='contained' className='button-contained' onClick={handleClickOpen}>
				Agregar +
			</Button>

			{loading ? (
				<Loader />
			) : getPosts().length > 0 ? (
				<BlogPostList posts={getPosts()} />
			) : (
				<Stack className='center-row'>
					<Typography className='main-title' variant='h4'>
						No hay posts
					</Typography>
					<Typography className='secondary-text' variant='h6'>
						Agregá uno nuevo
					</Typography>
				</Stack>
			)}
			{open && <AddPostForm handleClose={handleClose} posts={getPosts()} />}
		</Container>
	);
};

export default Blog;
