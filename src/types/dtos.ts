export interface BALLDONTLIE_Meta {
  next_cursor: number;
  per_page: number;
}

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
  date: string;
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

export interface CurrentWeatherConditions {
  LocalObservationDateTime: Date;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: 'C';
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: 'F';
      UnitType: number;
    };
  };
  MobileLink: string;
  Link: string;
}

export interface ChatGPTCompletionResponse {
  choices: [
    {
      message: {
        content: string;
      };
    }
  ];
}
