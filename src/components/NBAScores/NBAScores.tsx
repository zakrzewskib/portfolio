import { useState } from 'react';
import { useGetGamesQuery } from '../../store/api/nbaAPISlice';
import { dateToYYYYMMDD } from '../../utils';

export const NBAScores = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { data, isLoading, isFetching } = useGetGamesQuery({ date: dateToYYYYMMDD(date) });

  // todo: Use isFetching additionally of initial isLoading
  console.log(isFetching);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  const handleLoadMoreGames = () => {
    const prevDay = new Date(date.setDate(date.getDate() - 1));
    setDate(prevDay);
  };

  return (
    <div>
      <button onClick={handleLoadMoreGames}>Fetch more data</button>
      {data?.data.map((game) => (
        <p>
          {game.id} {game.date.toString()} {game.home_team.abbreviation} {game.home_team_score} vs{' '}
          {game.visitor_team.abbreviation} {game.visitor_team_score}
        </p>
      ))}
    </div>
  );
};
