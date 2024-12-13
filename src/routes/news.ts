import { Router } from "express";
import { extract } from "./lib/extractor";

const router = Router();

router.get("/", async (req: any, res) => {
  const url = `https://www.goal.com/en/news`;
  try {
    const news = await extract(url, ["newsArchive", "news"]);
    res.json(news);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/lists/title/${req.params.id}`;
  try {
    const news = await extract(url);
    console.log({ ...req.params.id });
    res.json(news);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

export default router;
