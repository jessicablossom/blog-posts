import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogCard = ({ post }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{post.title}</Typography>
        <Typography variant="h6">{post.author}</Typography>
        <Typography variant="body2" color="textSecondary">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
