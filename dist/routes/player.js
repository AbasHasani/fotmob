"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const extractor_1 = require("./lib/extractor");
const router = (0, express_1.Router)();
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/player/PlayerName/carrer/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["player"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Error again");
    }
});
router.get("/news/:id", async (req, res) => {
    const url = `https://www.goal.com/en/player/PlayerName/news/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Error again");
    }
});
exports.default = router;
