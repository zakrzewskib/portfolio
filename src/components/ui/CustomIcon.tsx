import { ImgHTMLAttributes } from 'react';

export const CustomIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  // default icon size = 24 = size="large" in MUI
  return <img {...props} height={24} width={24} />;
};
