import { Box } from '@mui/material';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { useEffect, useRef, useState } from 'react';
import cat from '../../assets/images/cat-eating.jpg';
import { drawRect } from './canvasUtils';

// todo: Add loading state

export const ObjectDetection = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setModel] = useState<cocossd.ObjectDetection>();

  useEffect(() => {
    cocossd.load().then((model) => {
      setModel(model);
      detectObjectsAndDrawRects(model);
    });
  }, []);

  const detectObjectsAndDrawRects = (model: cocossd.ObjectDetection) => {
    const img = imgRef.current!;
    const canvas = canvasRef.current!;

    model.detect(img).then((predictions) => {
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d')!;
      drawRect(ctx, predictions);
    });
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <img src={cat} alt='Cat eating from a bowl' ref={imgRef} />

      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, textAlign: 'center' }} />
    </Box>
  );
};
