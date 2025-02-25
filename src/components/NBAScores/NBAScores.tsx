import { useGetGamesQuery } from '../../store/api/nbaAPISlice';

export const NBAScores = () => {
  const { data } = useGetGamesQuery({});
  console.log(data);
  return <div>NBAScores</div>;
};
