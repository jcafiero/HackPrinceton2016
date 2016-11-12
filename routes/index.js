const excuseRoutes = require("./excuses");

const constructorMethod = (app) => {
    app.use("/", excuseRoutes);

    app.use("*", (req, res) => {
        res.redirect("/excuses");
    })
};

module.exports = constructorMethod;
