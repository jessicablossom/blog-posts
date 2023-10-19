import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import classes from './styles.module.scss';

const BlogPostList = ({ posts }) => {
  return (
    <div className={classes.postContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
