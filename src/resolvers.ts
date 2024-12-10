export const resolvers = {
  Query: {
    liveScore: async (_: any, { date }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getLiveScore(date);
      return data.data.liveScores;
    },
    match: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getMatch(id);
      return data.data;
    },
    news: async (_: any, __: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getNews();
      return data;
    },
    newsItem: async (_: any, { id }: any, { dataSources }: any) => {
      // console.log("Starting...");

      const data = await dataSources.goalAPI.getNewsItem(id);
      console.log("NewsItem:", data);

      return data;
    },
    teamSquad: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getTeamSquad(id);

      return data.data;
    },
    teamNews: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getTeamNews(id);

      return data.data;
    },
    teamMatches: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getTeamMatches(id);

      return data.data;
    },
    teamStandings: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getTeamStandings(id);

      return data.data;
    },
    team: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getTeam(id);

      return data.data;
    },
    player: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getPlayer(id);
      console.log(data);
      return data.data;
    },
    playerNews: async (_: any, { id }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getPlayerNews(id);

      return data.data;
    },
    liveScoreLives: async (_: any, { date }: any, { dataSources }: any) => {
      const data = await dataSources.goalAPI.getLiveScore(date);

      return data.filter((m: any) => m.status.type == "inprogress");
    },
  },
};
