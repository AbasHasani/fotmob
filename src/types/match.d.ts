// Team related types
interface TeamColors {
  primary: string;
  secondary: string;
  text: string;
}

interface TeamTranslations {
  nameTranslation: {
    ar?: string;
    ru?: string;
    [key: string]: string | undefined;
  };
  shortNameTranslation: Record<string, string>;
}

interface Country {
  alpha2: string;
  alpha3: string;
  name: string;
  slug: string;
}

interface Sport {
  name: string;
  slug: string;
  id: number;
}

interface Team {
  name: string;
  slug: string;
  shortName: string;
  sport: Sport;
  userCount: number;
  nameCode: string;
  disabled: boolean;
  national: boolean;
  type: number;
  id: number;
  country: Country;
  subTeams: any[];
  teamColors: TeamColors;
  fieldTranslations: TeamTranslations;
}

// Tournament related types
interface Category {
  name: string;
  slug: string;
  sport: Sport;
  id: number;
  country: Country;
  flag: string;
  alpha2: string;
}

interface UniqueTournament {
  name: string;
  slug: string;
  category: Category;
  userCount: number;
  id: number;
  hasEventPlayerStatistics: boolean;
  displayInverseHomeAwayTeams: boolean;
}

interface Tournament {
  name: string;
  slug: string;
  category: Category;
  uniqueTournament: UniqueTournament;
  priority: number;
  id: number;
}

// Score and time related types
interface Score {
  current: number;
  display: number;
  period1: number;
  period2: number;
  normaltime: number;
}

interface Time {
  injuryTime1: number;
  injuryTime2: number;
  currentPeriodStartTimestamp: number;
}

interface Status {
  code: number;
  description: string;
  type: string;
}

interface Season {
  name: string;
  year: string;
  editor: boolean;
  id: number;
}

interface RoundInfo {
  round: number;
}

interface Changes {
  changes: string[];
  changeTimestamp: number;
}

// Main match interface
export declare type Match = {
  tournament: Tournament;
  season: Season;
  roundInfo: RoundInfo;
  customId: string;
  status: Status;
  winnerCode: number;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: Score;
  awayScore: Score;
  time: Time;
  changes: Changes;
  hasGlobalHighlights: boolean;
  hasEventPlayerStatistics: boolean;
  hasEventPlayerHeatMap: boolean;
  detailId: number;
  crowdsourcingDataDisplayEnabled: boolean;
  id: number;
  startTimestamp: number;
  slug: string;
  finalResultOnly: boolean;
  feedLocked: boolean;
  isEditor: boolean;
};


export {};
