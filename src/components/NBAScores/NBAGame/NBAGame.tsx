import { Box, Paper, Typography } from '@mui/material';

import { Icon } from '../../../libraries/React-NBA-Logos-master/src';
import { GameDTO } from '../../../types';

interface NBAGameProps {
  game: GameDTO;
  HomeTeamLogo: Icon;
  VisitTeamLogo: Icon;
}

export const NBAGame = ({ game, HomeTeamLogo, VisitTeamLogo }: NBAGameProps) => {
  const { date, home_team, visitor_team, home_team_score, visitor_team_score } = game;
  return (
    <Paper sx={{ paddingBlock: 2, paddingInline: 2 }}>
      <Typography mb={2}>{date}</Typography>
      <Box display='flex' flexDirection='column' gap={1}>
        {/* todo: Extract to separate TeamScore component */}
        <Box display='flex' alignItems='center' gap={2}>
          <HomeTeamLogo size={60} />
          <Typography sx={{ fontWeight: home_team_score > visitor_team_score ? 'bold' : 'normal' }}>
            {home_team.name} {home_team_score}
          </Typography>
        </Box>
        <Box display='flex' alignItems='center' gap={2}>
          <VisitTeamLogo size={60} />
          <Typography sx={{ fontWeight: visitor_team_score > home_team_score ? 'bold' : 'normal' }}>
            {visitor_team.name} {visitor_team_score}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};
