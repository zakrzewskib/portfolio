import { Box } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import nbaLogos from '../../libraries/React-NBA-Logos-master/src/index';
import { useGetGamesQuery } from '../../store/api/nbaAPISlice';
import { GamesLoadingPlaceholder } from './GamesLoadingPlaceholder';
import { NBAGame } from './NBAGame/NBAGame';

export const NBAScores = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { data, isLoading } = useGetGamesQuery({ date: moment(date).format('YYYY-MM-DD') });

  if (isLoading || !data) {
    return <GamesLoadingPlaceholder />;
  }

  const handleLoadMoreGames = () => {
    const prevDay = new Date(date.setDate(date.getDate() - 1));
    setDate(prevDay);
  };

  return (
    <Box flex={1}>
      <InfiniteScroll
        dataLength={data.data.length}
        next={handleLoadMoreGames}
        hasMore={true}
        loader={<GamesLoadingPlaceholder />}
        height={250}
        style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
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
    </Box>
  );
};
