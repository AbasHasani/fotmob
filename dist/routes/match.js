"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const extractor_1 = require("./lib/extractor");
const router = (0, express_1.Router)();
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/match/one-vs-two/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["match"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Erro again");
    }
});
exports.default = router;
