interface TeamDTO {
  id: number;
  conference: 'East' | 'West';
  division: string;
  city: string;
  name: string;
  full_name: string;
  abbreviation: string;
}

export interface GameDTO {
  id: number;
  date: Date;
  datetime: Date;
  season: number;
  status: Date;
  period: number;
  time: string;
  postseason: boolean;
  home_team_score: number;
  visitor_team_score: number;
  home_team: TeamDTO;
  visitor_team: TeamDTO;
}
