import { Router } from "express";
import { extract } from "./lib/extractor";
const router = Router();

router.get("/matches/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en-us/premier-league/fixtures-results/${req.params.id}`;
  try {
    const data = await extract(url, ["gamesets"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Erro again");
  }
});

router.get("/standings/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en-us/premier-league/table/${req.params.id}`;
  try {
    const data = await extract(url, ["standings"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Erro again");
  }
});

router.get("/top-players/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en-us/premier-league/top-players/${req.params.id}`;
  try {
    const data = await extract(url, ["topPlayers"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Erro again");
  }
});

router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en-us/premier-league/news/${req.params.id}`;
  try {
    const data = await extract(url, ["newsArchive", "news"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Erro again");
  }
});

export default router;
