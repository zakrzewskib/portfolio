import { DetectedObject } from '@tensorflow-models/coco-ssd';

const TEXT_Y_SHIFT = 14;
const TEXT_X_SHIFT = 2;

export const drawPredictionsRect = (ctx: CanvasRenderingContext2D, detections: DetectedObject[]) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // todo: Generate 'better' colors
    const color = Math.floor(Math.random() * 16777215).toString(16);

    ctx.beginPath();

    ctx.font = '16px Arial';
    ctx.fillStyle = '#' + color;
    ctx.fillText(text, x + TEXT_X_SHIFT, y + TEXT_Y_SHIFT);

    ctx.strokeStyle = '#' + color;
    ctx.rect(x, y, width, height);

    ctx.stroke();
  });
};
