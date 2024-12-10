"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        liveScore: async (_, { date }, { dataSources }) => {
            const data = await dataSources.goalAPI.getLiveScore(date);
            return data.data.liveScores;
        },
        match: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getMatch(id);
            return data.data;
        },
        news: async (_, __, { dataSources }) => {
            const data = await dataSources.goalAPI.getNews();
            return data;
        },
        newsItem: async (_, { id }, { dataSources }) => {
            // console.log("Starting...");
            const data = await dataSources.goalAPI.getNewsItem(id);
            console.log("NewsItem:", data);
            return data;
        },
        teamSquad: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getTeamSquad(id);
            return data.data;
        },
        teamNews: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getTeamNews(id);
            return data.data;
        },
        teamMatches: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getTeamMatches(id);
            return data.data;
        },
        teamStandings: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getTeamStandings(id);
            return data.data;
        },
        team: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getTeam(id);
            return data.data;
        },
        player: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getPlayer(id);
            console.log(data);
            return data.data;
        },
        playerNews: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getPlayerNews(id);
            return data.data;
        },
        liveScoreLives: async (_, { date }, { dataSources }) => {
            const data = await dataSources.goalAPI.getLiveScore(date);
            return data.filter((m) => m.status.type == "inprogress");
        },
    },
};
