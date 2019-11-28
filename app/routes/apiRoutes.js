// Your apiRoutes.js file should contain two routes:
const friends = require("../data/friends");

module.exports = app => {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results.
    app.post("/api/friends", (req, res) => {

        let newFriend = req.body;
        let newScores = newFriend.scores;
        let differenceArray = []; // to hold each friend's score difference for comparison purposes
        let matchIndex = 0; // for use as an index when we compare all scores, will hold index of best match

        // parsing through friendArray
        for (let i = 0; i < friends.length; i++) {
            let friendScores = friends[i].scores;
            // resets the score difference for each friend it parses
            let scoreDifference = 0;

            // parsing through friend scores specifically
            for (let j = 0; j < newScores.length; j++) {
                // difference between user scores and already stored friend scores
                scoreDifference += Math.abs(parseInt(friendScores[j]) - parseInt(newScores[j]));
            }
            differenceArray.push(scoreDifference);
        }

        for (let i = 0; i < differenceArray.length; i++) {
            if (differenceArray[i] <= differenceArray[matchIndex]) {
                matchIndex = i;
            }
        }
        friends.push(newFriend);
        return res.json(friends[matchIndex]);
    });
}