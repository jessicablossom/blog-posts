import React, { useState } from 'react';
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Typography,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import usePosts from './../../hooks/useBlogPosts';
import AddPostForm from './../AddPostForm/AddPostForm';

import './detailpost.css';

const DetailPost = ({ post, open, handleClose }) => {
	const { deletePost, posts, fetchPosts } = usePosts();
	const [openConfirm, setOpenConfirm] = useState(false);
	const [edit, setEdit] = useState(false);

	const handleDelete = async () => {
		await deletePost(post.id);
		handleClose();
	};

	const handleEdit = () => {
		setEdit(true);
	};

	const handleConfirm = () => {
		setOpenConfirm(true);
	};

	const handleConfirmClose = async () => {
		setOpenConfirm(false);
	};

	return (
		<>
			<Dialog open={open} onClose={handleClose} maxWidth='lg'>
				<DialogTitle className='detail-title'>{post.title}</DialogTitle>
				<IconButton
					id='close'
					onClick={handleClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
				<Card className='post-card-detail'>
					<CardContent className='card-content'>
						<CardMedia sx={{ height: 250 }} image={post.image} title={post.image} />
						<Typography className='post-card-author' variant='h6'>
							Por {post.author}
						</Typography>
						<Stack className='description-container'>
							<Stack>
								<IconButton
									id='edit-post'
									onClick={handleEdit}
									sx={{
										position: 'absolute',
										right: 88,
										top: 8,
										color: (theme) => theme.palette.secondary.dark,
									}}
								>
									<EditIcon />
								</IconButton>
								<IconButton
									id='delete-post'
									onClick={handleConfirm}
									sx={{
										position: 'absolute',
										right: 48,
										top: 8,
										color: (theme) => theme.palette.secondary.dark,
									}}
								>
									<DeleteIcon />
								</IconButton>
							</Stack>
							<Typography variant='body2' color='textSecondary'>
								{post.description}
							</Typography>
						</Stack>
					</CardContent>
				</Card>
			</Dialog>
			{openConfirm && (
				<Dialog className='confirm-message' open={openConfirm} onClose={handleConfirmClose}>
					<DialogTitle>Confirmar eliminación</DialogTitle>
					<DialogContent>
						<Typography>¿Está seguro de que desea eliminar este artículo?</Typography>
					</DialogContent>
					<DialogActions>
						<Button id='cancel' className='button-link' onClick={handleConfirmClose}>
							Cancelar
						</Button>
						<Button
							id='confirm'
							className='button-contained small'
							variant='contained'
							onClick={handleDelete}
						>
							Confirmar
						</Button>
					</DialogActions>
				</Dialog>
			)}
			{edit && (
				<AddPostForm
					handleClose={handleClose}
					posts={posts}
					postId={post.id}
					initialData={{
						title: post.title,
						author: post.author,
						description: post.description,
						image: post.image,
					}}
				/>
			)}
		</>
	);
};

export default DetailPost;
