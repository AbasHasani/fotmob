import { Router } from "express";
import * as cheerio from "cheerio";
import { newsItem } from "../../types/team";
import { extractNewsItem } from "./newsItem";
import { extractNews } from "../team/news";
const router = Router();

router.get("/", async (req: any, res) => {
  const url = `https://www.goal.com/en/news`;
  try {
    const news = await extractNews(url);
    res.json(news);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/lists/title/${req.params.id}`;
  try {
    const news = await extractNewsItem(url);
    console.log({...req.params.id})
    // console.log("News from news/index.ts", news);

    res.json(news);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

export default router;
