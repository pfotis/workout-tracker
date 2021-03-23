const router = require("express").Router();
const db = require("../models/workout.js");

router.get("/api/workouts/range",function(req, res){
    db.find({})
    .then((data)=> res.json(data))
    .catch((error) => console.log(error));
});

module.exports = router;