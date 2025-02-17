import { Chip } from '@mui/material';
import { PropsWithChildren } from 'react';

export const Skill = ({ children }: PropsWithChildren) => {
  return <Chip label={children} sx={{ fontWeight: 'bold', fontSize: '100%' }} />;
};
