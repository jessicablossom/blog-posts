import { useState } from 'react';
import axios from 'axios';

const ENDPOINT_URL = 'https://65305bc56c756603295e8df4.mockapi.io/api/v1/blogposts';

const usePosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getPosts = () => {
		return posts;
	};

	const fetchPosts = async () => {
		try {
			setLoading(true);
			const response = await axios.get(ENDPOINT_URL);
			const sortedPosts = response.data.sort((a, b) => b.createdAt - a.createdAt);
			setPosts(sortedPosts);
			setError(null);
			return sortedPosts;
		} catch (err) {
			setError(err);
			return null;
		} finally {
			setLoading(false);
		}
	};

	const addPost = async (data) => {
		try {
			const response = await axios.post(ENDPOINT_URL, data);
			const updatedPosts = [response.data, ...getPosts()];
			const sortedPosts = updatedPosts.sort((a, b) => b.createdAt - a.createdAt);
			setPosts(sortedPosts);
			setError(null);
		} catch (err) {
			setError(err);
		}
	};

	const updatePost = async (id, data) => {
		try {
			await axios.put(`${ENDPOINT_URL}/${id}`, data);
			setPosts((prevPosts) => {
				const updatedPosts = prevPosts.map((post) => {
					if (post.id === id) {
						return { ...post, ...data };
					}
					return post;
				});
				const sortedPosts = updatedPosts.sort((a, b) => b.createdAt - a.createdAt);
				return sortedPosts;
			});

			setError(null);
		} catch (err) {
			setError(err);
		}
	};

	const deletePost = async (id) => {
		try {
			await axios.delete(`${ENDPOINT_URL}/${id}`);
			setPosts(posts.filter((post) => post.id !== id));
			setError(null);
		} catch (err) {
			setError(err);
		}
	};

	return {
		loading,
		error,
		getPosts,
		fetchPosts,
		addPost,
		updatePost,
		deletePost,
	};
};

export default usePosts;
