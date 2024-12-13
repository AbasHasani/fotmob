import { Router } from "express";
import { extract } from "./lib/extractor";
const router = Router();

router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/player/PlayerName/carrer/${req.params.id}`;
  try {
    const data = await extract(url, ["player"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Error again");
  }
});

router.get("/news/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/player/PlayerName/news/${req.params.id}`;
  try {
    const data = await extract(url);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send("Error again");
  }
});
export default router;
