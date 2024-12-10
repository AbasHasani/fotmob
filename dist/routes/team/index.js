"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matches_1 = require("./matches");
const news_1 = require("./news");
const standings_1 = require("./standings");
const squad_1 = require("./squad");
const newsItem_1 = require("../news/newsItem");
const router = (0, express_1.Router)();
router.get("/news/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/news/${req.params.id}`;
    try {
        const data = await (0, news_1.extractNews)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/matches/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/fixtures-results/${req.params.id}`;
    try {
        const data = await (0, matches_1.extractMatches)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/squad/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/squad/${req.params.id}`;
    try {
        const data = await (0, squad_1.extractSquad)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/standings/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/table/${req.params.id}`;
    try {
        const data = await (0, standings_1.extractStandings)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/chelsea/${req.params.id}`;
    try {
        const data = await (0, newsItem_1.extractNewsItem)(url);
        res.json({ data: data.team });
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
exports.default = router;
