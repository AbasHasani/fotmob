import { Router } from "express";
import { extract } from "./lib/extractor";
const router = Router();

router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/match/one-vs-two/${req.params.id}`;
  try {
    const data = await extract(url, ["match"]);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.send("Erro again");
  }
});

export default router;
