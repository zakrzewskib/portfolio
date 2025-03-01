import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { NBA_SCORES_HEIGHT } from './constants';

export const GamesLoadingSkeleton = () => {
  const gameHeight = '132px';
  return (
    <Stack spacing='12px' sx={{ height: `${NBA_SCORES_HEIGHT}px` }} className='maxWidthForText'>
      <Skeleton variant='rectangular' height={gameHeight} />
      <Skeleton variant='rectangular' height={gameHeight} />
      <Skeleton variant='rectangular' height={gameHeight} />
    </Stack>
  );
};
