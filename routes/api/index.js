const router = require("express").Router();
const questionRoutes = require("./questions");
const commentRoutes = require("./comments");

router.use("/questions", questionRoutes);
router.use("/comments", commentRoutes);
module.exports = router;