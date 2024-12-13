import * as cheerio from "cheerio";

export const extract = async (url: string, field?: string[]) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  const jsonScript: any = $("script#__NEXT_DATA__").html();
  // Extracting the news articles
  const jsonData = JSON.parse(jsonScript);

  if (jsonData) {
    if (field) {
      let nested: any = jsonData.props.pageProps.content;
      field.forEach((f) => {
        nested = nested[f];
      });
      return nested;
    }
    return jsonData.props.pageProps.content;
  } else {
    console.log("No news data found.");
    console.log(jsonData);
    return { jsonScript };
  }
};
