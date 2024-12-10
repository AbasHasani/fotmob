"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
class GoalAPI extends datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = "https://fotmob-uvwm.onrender.com/";
    }
    async getLiveScore(date) {
        return this.get(`live-score/${date}`);
    }
    async getMatch(id) {
        const data = await this.get(`match/${id}`);
        return data;
    }
    async getTeamNews(id) {
        const data = await this.get(`team/news/${id}`);
        return data;
    }
    async getTeamMatches(id) {
        const data = await this.get(`team/matches/${id}`);
        return data;
    }
    async getTeamSquad(id) {
        const data = await this.get(`team/squad/${id}`);
        return data;
    }
    async getTeamStandings(id) {
        const data = await this.get(`team/standings/${id}`);
        return data;
    }
    async getPlayer(id) {
        const data = await this.get(`player/${id}`);
        return data;
    }
    async getPlayerNews(id) {
        const data = await this.get(`player/news/${id}`);
        return data;
    }
    async getNews() {
        const data = await this.get(`news`);
        return data;
    }
    async getNewsItem(id) {
        const data = await this.get(`news/${id}`);
        return data;
    }
    async getTeam(id) {
        const data = await this.get(`team/${id}`);
        return data;
    }
}
exports.GoalAPI = GoalAPI;
