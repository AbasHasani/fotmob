"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerInfo_1 = require("./playerInfo");
const news_1 = require("../team/news");
const router = (0, express_1.Router)();
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/player/PlayerName/carrer/${req.params.id}`;
    try {
        const data = await (0, playerInfo_1.extractPlayerInfo)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Error again");
    }
});
router.get("/news/:id", async (req, res) => {
    const url = `https://www.goal.com/en/player/PlayerName/news/${req.params.id}`;
    try {
        const data = await (0, news_1.extractNews)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Error again");
    }
});
exports.default = router;
