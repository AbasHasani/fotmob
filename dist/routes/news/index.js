"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsItem_1 = require("./newsItem");
const news_1 = require("../team/news");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const url = `https://www.goal.com/en/news`;
    try {
        const news = await (0, news_1.extractNews)(url);
        res.json(news);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/lists/title/${req.params.id}`;
    try {
        const news = await (0, newsItem_1.extractNewsItem)(url);
        console.log({ ...req.params.id });
        // console.log("News from news/index.ts", news);
        res.json(news);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
exports.default = router;
