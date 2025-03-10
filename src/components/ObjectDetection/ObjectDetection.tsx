import { Box } from '@mui/material';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { useEffect, useRef } from 'react';
import cat from '../../assets/images/cat-eating.jpg';
import { drawPredictionsRect } from './canvasUtils';
import { ImageUploader } from './ImageUploader';

// todo: Add loading state

export const ObjectDetection = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    cocossd.load().then((model) => {
      detectObjectsAndDrawRects(model);
    });
  }, []);

  const detectObjectsAndDrawRects = (model: cocossd.ObjectDetection) => {
    const img = imgRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    model.detect(img).then((predictions) => {
      canvas.width = img.width;
      canvas.height = img.height;

      drawPredictionsRect(ctx, predictions);
    });
  };

  const handleImageUpload = (file: File) => {
    imgRef.current!.src = URL.createObjectURL(file);

    cocossd.load().then((model) => {
      detectObjectsAndDrawRects(model);
    });
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box component='img' src={cat} alt='Cat eating from a bowl' ref={imgRef} sx={{ mb: 2, maxHeight: '550px' }} />

      <Box
        component='canvas'
        ref={canvasRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />

      <ImageUploader onImageUpload={handleImageUpload} />
    </Box>
  );
};
