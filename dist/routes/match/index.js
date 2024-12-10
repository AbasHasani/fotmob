"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const match_1 = require("./match");
const router = (0, express_1.Router)();
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/match/one-vs-two/${req.params.id}`;
    try {
        // const response = await fetch(
        //   `https://www.goal.com/api/match/refresh?edition=en&id=${req.params.id}&tab=lineUps&includeAside=false`
        // );
        // const teams = await extractNames(url);
        const data = await (0, match_1.extractMatch)(url);
        res.json({ data });
    }
    catch (error) {
        console.log(error);
        res.send("Erro again");
    }
});
exports.default = router;
