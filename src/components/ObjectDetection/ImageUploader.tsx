import { Button } from '@mui/material';
import React from 'react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

export const ImageUploader = ({ onImageUpload }: ImageUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      onImageUpload(file);
    }
  };

  return (
    <Button variant='contained' component='label'>
      Upload your own image
      <input type='file' accept='image/png, image/jpeg' hidden onChange={handleFileChange} />
    </Button>
  );
};
