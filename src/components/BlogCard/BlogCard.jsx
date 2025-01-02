import React, { useState } from 'react';
import usePosts from './../../hooks/useBlogPosts';

import { Card, CardMedia, Typography, Button } from '@mui/material';
import DetailPost from '../DetailPostModal/DetailPostModal';
import './blogcard.css';

const BlogCard = ({ post }) => {
	const { fetchPosts } = usePosts();
	const [openDetail, setOpenDetail] = useState(false);

	const displayDescription = post.description.slice(0, 200);

	const handleOpen = () => {
		setOpenDetail(true);
	};

	const handleClose = () => {
		setOpenDetail(false);
	};

	return (
		<Card className='post-card'>
			<Typography className='post-card-title' variant='h4'>
				{post.title}
			</Typography>
			<Typography className='post-card-author' variant='h6'>
				{post.author}
			</Typography>
			<CardMedia sx={{ height: 200 }} image={post.image} title={post.image} />
			<Typography variant='body2' color='textSecondary'>
				{displayDescription}...
			</Typography>
			<Button id='more' className='button-link' onClick={handleOpen} variant='link'>
				Ver mas
			</Button>
			{openDetail && <DetailPost post={post} open={openDetail} handleClose={handleClose} />}
		</Card>
	);
};

export default BlogCard;
