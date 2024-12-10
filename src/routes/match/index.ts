import { Router } from "express";
import * as cheerio from "cheerio";
import { extractMatch } from "./match";
const router = Router();



router.get("/:id", async (req: any, res) => {
  const url = `https://www.goal.com/en/match/one-vs-two/${req.params.id}`;
  try {
    // const response = await fetch(
    //   `https://www.goal.com/api/match/refresh?edition=en&id=${req.params.id}&tab=lineUps&includeAside=false`
    // );
    // const teams = await extractNames(url);
    const data = await extractMatch(url);
    res.json({ data });
  } catch (error) {
    console.log(error);
    res.send("Erro again");
  }
});



export default router;
