import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firebaseStorage as getStorage } from '../services/firebase/firebase.config';
import Swal from 'sweetalert2';

interface CheckoutFormProps {
  txHash?: string;
  onSuccess: () => void;
}

const ImageForm: React.FC<CheckoutFormProps> = ({ txHash, onSuccess }) => {
  const [formData, setFormData] = useState({
    hash: txHash || '',
    descripcion: '',
    imagen: null as File | null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        imagen: event.target.files ? event.target.files[0] : null,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Guardar la imagen en Firebase Storage (si está presente)
    let imageUrl = '';
    if (formData.imagen) {
      const storage = getStorage;
      const imageRef = ref(storage, `images/${formData.imagen.name}`);
      await uploadBytes(imageRef, formData.imagen);
      imageUrl = await getDownloadURL(imageRef);
      console.log('URL de la imagen:', imageUrl);

      Swal.fire({
        title: 'Success!',
        text: `Receipts uploaded correctly \nURL: ${imageUrl}`,
        icon: 'success',
      });

      onSuccess();
    }
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Hash"
            name="hash"
            value={formData.hash}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mt={4}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            placeholder="Image"
          />
        </Box>
        <Box mt={6}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ height: '2.5rem' }}
          >
            Confirm Order
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ImageForm;
