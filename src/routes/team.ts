import { Router } from "express";
import { extract } from "./lib/extractor";
const router = Router();

router.get("/news/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/news/${req.params.id}`;
  try {
    const data = await extract(url, ["newsArchive", "news"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/matches/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/fixtures-results/${req.params.id}`;
  try {
    const data = await extract(url, ["matches"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/squad/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/squad/${req.params.id}`;
  try {
    const data = await extract(url, ["squad"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/standings/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/hello/table/${req.params.id}`;
  try {
    const data = await extract(url, ["standings"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/team/chelsea/${req.params.id}`;
  try {
    const data = await extract(url, ["team"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Failed.");
  }
});

export default router;
