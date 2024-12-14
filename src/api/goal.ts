import { RESTDataSource } from "@apollo/datasource-rest";

export class GoalAPI extends RESTDataSource {
  // override baseURL = "https://fotmob-uvwm.onrender.com/";
  override baseURL = "http://localhost:4000/";

  async getField(field: string, param: string): Promise<any> {
    const data = await this.get(`${field}/${param}`);
    return data;
  }
  // async getLiveScore(date: string): Promise<any> {
  //   return this.get<any>(`live-score/${date}`);
  // }

  // async getMatch(id: string): Promise<any[]> {
  //   const data = await this.get(`match/${id}`);
  //   return data;
  // }
  // async getTeamNews(id: string): Promise<any[]> {
  //   const data = await this.get(`team/news/${id}`);
  //   return data;
  // }
  // async getTeamMatches(id: string): Promise<any[]> {
  //   const data = await this.get(`team/matches/${id}`);
  //   return data;
  // }
  // async getTeamSquad(id: string): Promise<any[]> {
  //   const data = await this.get(`team/squad/${id}`);
  //   return data;
  // }
  // async getTeamStandings(id: string): Promise<any[]> {
  //   const data = await this.get(`team/standings/${id}`);
  //   return data;
  // }
  // async getPlayer(id: string): Promise<any[]> {
  //   const data = await this.get(`player/${id}`);
  //   return data;
  // }
  // async getPlayerNews(id: string): Promise<any[]> {
  //   const data = await this.get(`player/news/${id}`);
  //   return data;
  // }
  async getNews(): Promise<any[]> {
    const data = await this.get(`news`);
    return data;
  }
  // async getNewsItem(id: string): Promise<any[]> {
  //   const data = await this.get(`news/${id}`);
  //   return data;
  // }
  // async getTeam(id: string): Promise<any[]> {
  //   const data = await this.get(`team/${id}`);
  //   return data;
  // }
  // async getLeagueNews(id: string): Promise<any[]> {
  //   const data = await this.get(`league/${id}`);
  //   return data;
  // }
}
