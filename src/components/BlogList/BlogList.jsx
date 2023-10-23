import React, { useState, useEffect } from 'react';
import BlogCard from '../BlogCard/BlogCard';
import { Pagination } from '@mui/material';
import './index.css';

const BlogPostList = ({ posts }) => {
  const postsPerPage = 5;
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = posts.slice(startIndex, endIndex);

  return (
    <div className="post-container">
      {visiblePosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
      {posts.length > postsPerPage && (
        <Pagination
          className="pagination"
          color="error"
          count={Math.ceil(posts.length / postsPerPage)}
          onChange={handlePageChange}
          page={page}
          siblingCount={1}
          size="large"
        />
      )}
    </div>
  );
};

export default BlogPostList;
