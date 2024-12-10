import * as cheerio from "cheerio";

export const extractNewsItem = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  const jsonScript: any = $("script#__NEXT_DATA__").html();
  // Extracting the news articles
  const jsonData = JSON.parse(jsonScript);

  if (jsonData) {
    return jsonData.props.pageProps.content;
  } else {
    console.log("No news data found.");
    console.log(jsonData);
    return { jsonScript };
  }
};
