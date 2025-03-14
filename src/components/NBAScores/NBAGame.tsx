import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import moment from 'moment';
import { Icon } from '../../libraries/React-NBA-Logos/src';
import { GameDTO } from '../../types';

interface NBAGameProps {
  game: GameDTO;
  HomeTeamLogo: Icon;
  VisitTeamLogo: Icon;
}

export const NBAGame = ({ game, HomeTeamLogo, VisitTeamLogo }: NBAGameProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { date, home_team, visitor_team, home_team_score, visitor_team_score } = game;

  const gameDidFinish = home_team_score !== 0;

  return (
    <Paper sx={{ paddingBlock: 2, paddingInline: 2 }} elevation={3}>
      <Typography mb={2}>{gameDidFinish ? moment(date).format('Do MMM YYYY') : 'Game will be played today'}</Typography>
      <Box display='flex' flexDirection='row' gap={1} alignItems='center'>
        {/* todo: Extract to separate TeamScore component */}
        <Box display='flex' alignItems='center' gap={1}>
          <HomeTeamLogo size={60} />
          <Typography sx={{ fontWeight: home_team_score > visitor_team_score ? 'bold' : 'normal' }}>
            {isMobile ? home_team.abbreviation : home_team.name}
            {gameDidFinish ? ` ${home_team_score}` : ''}
          </Typography>
        </Box>
        vs
        <Box display='flex' alignItems='center' gap={1}>
          <Typography sx={{ fontWeight: visitor_team_score > home_team_score ? 'bold' : 'normal' }}>
            {isMobile ? visitor_team.abbreviation : visitor_team.name}
            {gameDidFinish ? ` ${visitor_team_score}` : ''}
          </Typography>
          <VisitTeamLogo size={60} />
        </Box>
      </Box>
    </Paper>
  );
};
