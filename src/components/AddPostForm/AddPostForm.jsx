import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  Stack,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import usePosts from './../../hooks/useBlogPosts';
import useImageUpload from '../../hooks/useImageUpload';

import './addpostform.css';

const AddPostForm = ({ handleClose, initialData, postId, posts }) => {
  const { addPost, getPosts, updatePost } = usePosts();
  const { uploadImages } = useImageUpload();
  const [formData, setFormData] = useState({});
  const title = postId ? 'Editar articulo' : 'Nuevo Articulo';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const file = event.target['input-upload'].files[0];
    try {
      const imageUrl = await uploadImages(file);
      const data = {
        title: formData.title,
        author: formData.author,
        description: formData.description,
        image: imageUrl,
      };
      if (postId) {
        await updatePost(postId, data);
      } else {
        await addPost(data);
      }
      getPosts();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const authorsList = Array.from(
    new Set(posts && posts.map((post) => post.author))
  );

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        author: initialData.author || '',
        description: initialData.description || '',
        image: initialData.image || null,
      });
    }
  }, [initialData]);

  return (
    <Dialog className="modal" open={true} onClose={handleClose} maxWidth="lg">
      <DialogTitle>{title}</DialogTitle>
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
      <DialogContent className="add-post-form">
        <form onSubmit={handleSubmit}>
          <FormControl required fullWidth>
            <TextField
              name="title"
              label="Título"
              value={formData.title}
              onChange={handleInputChange}
              variant="filled"
              required
              fullWidth
              margin="normal"
              color="success"
            />
            <TextField
              name="author"
              label="Autor"
              value={formData.author}
              onChange={handleInputChange}
              variant="filled"
              required
              fullWidth
              margin="normal"
              color="success"
            />
            {/* 
			El nombre del autor lo habia pensado como un combo, pero no logre que tome el initial value
			dejo el codigo aqui para iterarlo eventualmente 

			<FormControl variant="filled" sx={{ width: '100% ' }}>
              <InputLabel color="success">Autor *</InputLabel>
              <Select
                color="success"
                name="author"
                label="Autor"
                value={formData.author}
                onChange={handleInputChange}
                required
                fullWidth
                variant="filled"
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 200,
                    },
                  },
                }}
              >
                {authorsList.map((author) => (
                  <MenuItem key={author} value={author}>
                    {author}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <TextField
              color="success"
              name="description"
              label="Descripción"
              value={formData.description}
              onChange={handleInputChange}
              required
              fullWidth
              multiline
              rows={4}
              margin="normal"
              variant="filled"
            />
            <Button
              component="label"
              className="button-upload"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Cargar Imagen
              <input hidden id="input-upload" type="file" accept="image/*" />
            </Button>
            <Stack className="button-container" direction="row" spacing={2}>
              <Button
                className="button-link"
                onClick={handleClose}
                variant="text"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="button-contained"
                variant="contained"
              >
                Guardar
              </Button>
            </Stack>
          </FormControl>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostForm;
