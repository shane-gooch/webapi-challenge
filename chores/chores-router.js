const router = require("express").Router();
const People = require("../data/people.js");

router.get("/:id/chores", (req, res) => {
  const { id } = req.params;
  console.log(id);
});

module.exports = router;
