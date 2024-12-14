"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        liveScore: async (_, { date }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("live-score", date);
            return data;
        },
        match: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("match", id);
            return data;
        },
        news: async (_, __, { dataSources }) => {
            const data = await dataSources.goalAPI.getNews("news");
            return data;
        },
        newsItem: async (_, { id }, { dataSources }) => {
            // console.log("Starting...");
            const data = await dataSources.goalAPI.getField("news", id);
            console.log("NewsItem:", data);
            return data;
        },
        teamSquad: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("team/squad", id);
            return data;
        },
        teamNews: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("team/news", id);
            return data;
        },
        teamMatches: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("team/matches", id);
            return data;
        },
        teamStandings: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("team/standings", id);
            return data;
        },
        team: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("team", id);
            return data;
        },
        player: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("player", id);
            console.log(data);
            return data;
        },
        playerNews: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("player/news", id);
            return data;
        },
        liveScoreLives: async (_, { date }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField(date);
            return data.filter((m) => m.status.type == "inprogress");
        },
        leagueNews: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("league", id);
            return data;
        },
        leagueMatches: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("league/matches", id);
            return { leagueRoundMatches: data };
        },
        leagueStandings: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("league/standings", id);
            return data;
        },
        leagueTopPlayers: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("league/top-players", id);
            return data;
        },
        leagueCompetition: async (_, { id }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("league/competition", id);
            return data;
        },
        leagueRound: async (_, { id, round }, { dataSources }) => {
            const data = await dataSources.goalAPI.getField("league/round", `${id}/${round}`);
            return data;
        },
    },
    LeagueMatches: {
        leagueRound: async (parent, { id, round }, { dataSources }, info) => {
            const requestedFields = info.fieldNodes.find((node) => node.name.value === "leagueRound");
            if (requestedFields) {
                const data = await dataSources.goalAPI.getField("league/round", `${id}/${round}`);
                return data;
            }
            return null;
        },
    },
};
