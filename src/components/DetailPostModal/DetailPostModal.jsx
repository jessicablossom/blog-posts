import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import usePosts from './../../hooks/useBlogPosts';
import './detailpost.css';

const DetailPost = ({ post, open, handleClose }) => {
  const { deletePost, getPosts } = usePosts();

  const handleDelete = async () => {
    await deletePost(post.id);
    handleClose();
  };

  return (
    <Dialog className="modal" open={open} onClose={handleClose} maxWidth="lg">
      <DialogTitle>{post.title}</DialogTitle>
      <IconButton
        aria-label="close"
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
      <Card className="post-card-detail">
        <CardContent className="card-content">
          <CardMedia
            sx={{ height: 250 }}
            image={post.image}
            title={post.image}
          />
          <Typography className="post-card-author" variant="h6">
            Por {post.author}
          </Typography>
          <Stack className="description-container">
            <Stack>
              <IconButton
                onClick={handleDelete}
                sx={{
                  position: 'absolute',
                  right: 48,
                  top: 8,
                  color: (theme) => theme.palette.error.main,
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
            <Typography variant="body2" color="textSecondary">
              {post.description}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default DetailPost;
