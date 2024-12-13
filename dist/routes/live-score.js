"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/:date", async (req, res) => {
    try {
        const response = await fetch(`https://www.goal.com/api/live-scores/refresh?edition=en&date=${req.params.date}&tzoffset=210`);
        const { liveScores } = await response.json();
        // console.log(data.liveScores.map((ls: any) => ls.matches));
        res.json(liveScores);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.default = router;
