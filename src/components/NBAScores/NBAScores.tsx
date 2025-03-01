import { Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import nbaLogos from '../../libraries/React-NBA-Logos/src/index';
import { useGetGamesQuery } from '../../store/api/nbaAPISlice';
import { GamesLoadingPlaceholder } from './GamesLoadingPlaceholder';
import { GamesLoadingSkeleton } from './GamesLoadingSkeleton';
import { NBAGame } from './NBAGame';
import { NBA_SCORES_HEIGHT } from './constants';

export const NBAScores = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { data, isLoading } = useGetGamesQuery({ date: moment(date).format('YYYY-MM-DD') });

  if (isLoading) {
    return <GamesLoadingSkeleton />;
  }

  if (!data) {
    return <Typography>Games couldn't be loaded...</Typography>;
  }

  const handleLoadMoreGames = () => {
    const prevDay = new Date(date.setDate(date.getDate() - 1));
    setDate(prevDay);
  };

  return (
    <InfiniteScroll
      dataLength={data.data.length}
      next={handleLoadMoreGames}
      hasMore={true}
      loader={<GamesLoadingPlaceholder />}
      height={NBA_SCORES_HEIGHT}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {data.data.map((game) => (
        <NBAGame
          key={game.id}
          game={game}
          HomeTeamLogo={nbaLogos[game.home_team.abbreviation as keyof typeof nbaLogos]}
          VisitTeamLogo={nbaLogos[game.visitor_team.abbreviation as keyof typeof nbaLogos]}
        />
      ))}
    </InfiniteScroll>
  );
};
