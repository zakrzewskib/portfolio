import { DetectedObject } from '@tensorflow-models/coco-ssd';

const TEXT_Y_SHIFT = 14;
const TEXT_X_SHIFT = 2;

export const drawPredictionsRect = (ctx: CanvasRenderingContext2D, predictions: DetectedObject[]) => {
  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    const color = getRandomColor();

    ctx.beginPath();

    ctx.font = '16px Arial';
    ctx.fillStyle = color;
    ctx.fillText(text, x + TEXT_X_SHIFT, y + TEXT_Y_SHIFT);

    ctx.strokeStyle = color;
    ctx.rect(x, y, width, height);

    ctx.stroke();
  });
};

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// https://gist.github.com/bendc/76c48ce53299e6078a76
const getRandomColor = () => {
  const h = randomInt(0, 360);
  const s = randomInt(42, 98);
  const l = randomInt(40, 90);
  return `hsl(${h},${s}%,${l}%)`;
};
