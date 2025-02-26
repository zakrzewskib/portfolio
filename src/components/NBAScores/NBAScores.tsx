import { Box } from '@mui/material';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetGamesQuery } from '../../store/api/nbaAPISlice';
import { dateToYYYYMMDD } from '../../utils';

export const NBAScores = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { data, isLoading } = useGetGamesQuery({ date: dateToYYYYMMDD(date) });

  if (isLoading || !data) {
    return <div>Loading...</div>;
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
        loader={<p>Loading...</p>}
        height={250}
      >
        {data.data.map((game) => (
          <div key={game.id} style={{ height: '30px' }}>
            {game.date.toString()} {game.home_team.abbreviation} {game.home_team_score} vs{' '}
            {game.visitor_team.abbreviation} {game.visitor_team_score}
          </div>
        ))}
      </InfiniteScroll>
    </Box>
  );
};
