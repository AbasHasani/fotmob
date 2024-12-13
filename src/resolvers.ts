export const resolvers = {
  Query: {
    liveScore: async (_: any, { date }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("live-score", date);
      return data;
    },
    match: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField(id);
      return data;
    },
    news: async (_: any, __: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getNews("news");
      return data;
    },
    newsItem: async (_: any, { id }: any, { dataSources }: any) => {
      // console.log("Starting...");

      const data = await dataSources.goalAPI.getField("news",id);
      console.log("NewsItem:", data);

      return data;
    },
    teamSquad: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("team/squad",id);

      return data;
    },
    teamNews: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("team/news",id);

      return data;
    },
    teamMatches: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("team/matches",id);

      return data;
    },
    teamStandings: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("team/standings",id);

      return data;
    },
    team: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("team",id);

      return data;
    },
    player: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("player",id);
      console.log(data);
      return data;
    },
    playerNews: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("player/news",id);

      return data;
    },
    liveScoreLives: async (_: any, { date }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField(date);

      return data.filter((m: any) => m.status.type == "inprogress");
    },
    leagueNews: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("league",id);
      return data;
    },
    leagueMatches: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("league/matches", id);
      return data;
    },
    leagueStandings: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("league/standings", id);
      return data;
    },
    leagueTopPlayers: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getField("league/top-players", id);
      return data;
    },
  },
};
