// Your apiRoutes.js file should contain two routes:
const friends = require("../data/friends");

module.exports = app => {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results.
    app.post("/api/friends", (req, res) => {
        let matchFriend = req.body;
        let newScores = matchFriend.scores;
        // The closest match will be the user with the least amount of difference.
        let differenceArr = [];
        // By comparing all scores this will hold the best match
        let matchIndex = 0;

        friends.forEach(element => {
            var friendScores = element.friends.scores;
            var scoreDifference = 0;

            newScores.forEach(product => {
                scoreDifference += Math.abs(parseInt(product.newScores) - parseInt(product.newScores));
            });
            differenceArr.push(scoreDifference);

        });

        differenceArr.forEach(element => {
            if (element.differenceArr <= differenceArr[matchIndex]) {
                matchIndex = element;
            }
        });

        friends.push(matchFriend);
        return res.json(friends[matchIndex]);
    });
}