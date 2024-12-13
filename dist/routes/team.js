"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const extractor_1 = require("./lib/extractor");
const router = (0, express_1.Router)();
router.get("/news/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/news/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["newsArchive", "news"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/matches/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/fixtures-results/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["matches"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/squad/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/squad/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["squad"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/standings/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/hello/table/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["standings"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
router.get("/:id", async (req, res) => {
    const url = `https://www.goal.com/en/team/chelsea/${req.params.id}`;
    try {
        const data = await (0, extractor_1.extract)(url, ["team"]);
        res.json(data);
    }
    catch (error) {
        console.log(error);
        res.send("Failed.");
    }
});
exports.default = router;
