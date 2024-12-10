import * as cheerio from "cheerio";
import { newsItem } from "../../types/team";

export const extractNews = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  const jsonScript: any = $("script#__NEXT_DATA__").html();
  // Extracting the news articles
  const jsonData = JSON.parse(jsonScript);
  const newsData: newsItem[] = jsonData.props.pageProps.content.newsArchive.news;

  if (newsData) {
    return newsData;
  } else {
    console.log("No news data found.");
    console.log(newsData);
    return { jsonScript };
  }
};
