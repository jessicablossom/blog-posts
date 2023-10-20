import React, { useState } from 'react';
import {
  Button,
  Dialog,
  Stack,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './index.css';

const AddPostForm = ({ open, handleClose, addPost }) => {
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

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Dialog className="dialog-form" open={open} onClose={handleClose}>
      <DialogTitle>Nuevo Articulo</DialogTitle>
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
        <Button
          component="label"
          className="button-upload"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Cargar Imagen
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Button>
      </DialogContent>
      <Stack className="button-container" direction="row" spacing={2}>
        <Button
          className="button-link"
          onClick={handleClose}
          color="primary"
          variant="text"
        >
          Cancelar
        </Button>
        <Button
          className="button-contained"
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

export default AddPostForm;
