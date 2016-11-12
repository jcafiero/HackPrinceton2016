const express = require('express');
const router = express.Router();
const data = require("../data");
const excuse = data.excuse;

router.get("/excuses", (req, res) => {
    res.render("page/excuses", {});
});

router.post("/excuses", (req, res) => {
    try {
        let result = excuse.getRandomExcuse();
    } catch (e) {
        res.render("page/excuses", { error: e });
        return;
    }

    res.render("page/excuses", { result: result });
});

module.exports = router;
