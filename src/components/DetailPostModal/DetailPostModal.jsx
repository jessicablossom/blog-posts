import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Typography,
  Dialog,
  DialogTitle,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './detailpost.css';

const DetailPost = ({ post, open, handleClose }) => {
  return (
    <Dialog className="modal" open={open} onClose={handleClose}>
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
        <CardContent>
          <Container className="image-container" maxWidth="sm">
            <img
              className="post-images-detail"
              src="https://picsum.photos/id/1084/536/354?grayscale"
              alt="Post Image"
            />
          </Container>
          <Typography className="post-card-author" variant="h6">
            Por {post.author}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default DetailPost;
