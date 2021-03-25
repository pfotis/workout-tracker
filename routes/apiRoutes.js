const router = require("express").Router();
const db = require("../models/workout.js");


router.get("/api/workouts", function(req, res){
    db.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/api/workouts", (req, res) => {
    db.create({})
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
      res.json(err);
    });
});

router.get("/api/workouts/range", function(req, res){
    db.find()
    .then((data) =>
    {
      res.json(data)
    })
    .catch((error) => 
    {
      console.log(error)
    });
});

module.exports = router;