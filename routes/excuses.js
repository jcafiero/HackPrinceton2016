"use strict";
const express = require('express');
const router = express.Router();
const data = require("../data");
const excuses = data.excuses;

router.get("/excuses", (req, res) => {
    res.render("page/excuses", {});
});

router.post("/excuses", (req, res) => {
    let result;
    try {
        result = excuses.getRandomExcuse();
    } catch (e) {
        res.render("page/excuses", { error: e });
        return;
    }

    res.render("page/excuses", { result: result });
});

module.exports = router;
