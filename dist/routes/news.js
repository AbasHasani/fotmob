"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const extractor_1 = require("./lib/extractor");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const url = `https://www.goal.com/en/news`;
    try {
        const news = await (0, extractor_1.extract)(url, ["newsArchive", "news"]);
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
        const news = await (0, extractor_1.extract)(url);
        console.log({ ...req.params.id });
        res.json(news);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
exports.default = router;
