import React, { useState } from 'react';
import {
  Button,
  Dialog,
  Stack,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import classes from './styles.module.scss';

const BlogModal = ({ open, handleClose, addPost }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (formData.title && formData.author && formData.description) {
      addPost(formData);
      setFormData({
        title: '',
        author: '',
        description: '',
        image: null,
      });
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Nuevo Blog Post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Complete los campos y haga clic en "Agregar" para añadir un nuevo
          post.
        </DialogContentText>
        <TextField
          name="title"
          label="Título"
          value={formData.title}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="author"
          label="Autor"
          value={formData.author}
          onChange={handleInputChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Descripción"
          value={formData.description}
          onChange={handleInputChange}
          required
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </DialogContent>
      <Stack className={classes.buttonContainer} direction="row" spacing={2}>
        <Button
          className={classes.buttonLink}
          onClick={handleClose}
          color="primary"
          variant="text"
        >
          Cancelar
        </Button>
        <Button
          className={classes.buttonContained}
          onClick={handleSubmit}
          color="primary"
          variant="contained"
        >
          Agregar
        </Button>
      </Stack>
    </Dialog>
  );
};

export default BlogModal;
