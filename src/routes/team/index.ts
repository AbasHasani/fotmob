import { Router } from "express";
import * as cheerio from "cheerio";
import { extractMatches } from "./matches";
import { extractNews } from "./news";
import { extractStandings } from "./standings";
import { extractSquad } from "./squad";
import { extractPlayerInfo } from "../player/playerInfo";
import { extractNewsItem } from "../news/newsItem";
const router = Router();

router.get("/news/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/news/${req.params.id}`;
  try {
    const data = await extractNews(url);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/matches/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/fixtures-results/${req.params.id}`;
  try {
    const data = await extractMatches(url);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/squad/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/squad/${req.params.id}`;
  try {
    const data = await extractSquad(url);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/standings/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/table/${req.params.id}`;
  try {
    const data = await extractStandings(url);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});


router.get("/:id", async (req: any, res) => {
    const url = `https://www.goal.com/en/team/chelsea/${req.params.id}`;
    try {
      const data = await extractNewsItem(url);
      res.json({ data: data.team });
    } catch (error) {
      console.log(error);
      res.send("Failed.");
    }
  });

export default router;
