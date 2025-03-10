import { DetectedObject } from '@tensorflow-models/coco-ssd';

export const drawRect = (ctx: CanvasRenderingContext2D, detections: DetectedObject[]) => {
  detections.forEach((prediction) => {
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // todo: Generate 'better' colors
    const color = Math.floor(Math.random() * 16777215).toString(16);

    ctx.beginPath();

    ctx.font = '18px Arial';
    ctx.fillStyle = '#' + color;
    ctx.fillText(text, x, y);

    ctx.strokeStyle = '#' + color;
    ctx.rect(x, y, width, height);

    ctx.stroke();
  });
};
