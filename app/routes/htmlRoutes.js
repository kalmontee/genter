const path = require("path");

module.exports = app => {

    // A default, catch-all route that leads to home.html which displays the home page.
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // A GET Route to /survey which should display the survey page.
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}