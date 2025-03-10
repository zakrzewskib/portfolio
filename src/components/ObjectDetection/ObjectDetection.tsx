import { Box } from '@mui/material';
import * as cocossd from '@tensorflow-models/coco-ssd';
import { useEffect, useRef } from 'react';
import cat from '../../assets/images/cat-eating.jpg';
import { drawRect } from './canvasUtils';

// todo: Add loading state
export const ObjectDetection = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    cocossd.load().then((model) => {
      const img = imgRef.current!;
      const canvas = canvasRef.current!;

      model.detect(img).then((predictions) => {
        img.width = canvas.width = 640;
        img.height = canvas.height = 480;

        const ctx = canvas.getContext('2d')!;
        drawRect(ctx, predictions);
      });
    });
  }, []);

  return (
    <Box sx={{ position: 'relative', width: '640px', height: '480px' }}>
      <img
        src={cat}
        alt='Cat eating from a bowl'
        ref={imgRef}
        width={640}
        height={480}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, textAlign: 'center' }}
      />

      <canvas
        ref={canvasRef}
        style={{ width: 640, height: 480, position: 'absolute', top: 0, left: 0, zIndex: 2, textAlign: 'center' }}
      />
    </Box>
  );
};
