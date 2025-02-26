import { Breakpoint } from '@mui/material';

export interface LayoutProps {
  maxWidth: Breakpoint;
}

export interface MobileResponsiveProps {
  isMobile?: boolean;
}

export * from './api';
export * from './dtos';
