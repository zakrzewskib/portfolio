import * as cocossd from '@tensorflow-models/coco-ssd';
import cat from '../../assets/images/cat-eating.jpg';

import { useEffect, useRef } from 'react';

// todo: Add loading state
export const ObjectDetection = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    cocossd.load().then((model) =>
      model.detect(imgRef.current!).then((predictions) => {
        console.log('Predictions: ', predictions);
      })
    );
  }, []);

  return <img id='img' src={cat} alt='Cat eating from a bowl' ref={imgRef} />;
};
