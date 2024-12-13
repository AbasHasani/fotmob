"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const extractor_1 = require("./lib/extractor");
const router = (0, express_1.Router)();
router.get("/matches/:id", async (req, res) => {
    const url = `https://www.goal.com/en-us/premier-league/fixtures-results/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["gamesets"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Erro again");
    }
});
router.get("/standings/:id", async (req, res) => {
    const url = `https://www.goal.com/en-us/premier-league/table/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["standings"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Erro again");
    }
});
router.get("/top-players/:id", async (req, res) => {
    const url = `https://www.goal.com/en-us/premier-league/top-players/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["topPlayers"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Erro again");
    }
});
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en-us/premier-league/news/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["newsArchive", "news"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Erro again");
    }
});
exports.default = router;
