import * as cheerio from "cheerio";

export const extractMatch = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  const jsonScript = $("script#__NEXT_DATA__").html();

  // Parse the JSON content
  if (jsonScript) {
    const nextData = JSON.parse(jsonScript);
    const eventData = nextData.props.pageProps.content.match;

    // Get homeTeam and awayTeam
    const teamA = eventData.teamA;
    const teamB = eventData.teamB;
    return eventData;
  } else {
    console.log('Script with id "__NEXT_DATA__" not found.');
    return { teamA: undefined, teamB: undefined };
  }
};
