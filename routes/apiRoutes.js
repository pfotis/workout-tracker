const router = require("express").Router();
const db = require("../models/workout.js");


router.get("/api/workouts", function(req, res){
    db.find({})
    .then((data) => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log("PARAMS", body, params);
  db.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },

    { new: true, runValidators: true }
  )
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function(req, res){
    db.find({})
    .limit(8)
    .then((data) =>
    {
      console.log(data);
      res.json(data)
    })
    .catch(err => 
    {
      res.status(400).json(err);
    });
});

module.exports = router;