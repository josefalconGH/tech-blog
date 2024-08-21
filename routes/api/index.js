// Purpose: export the router
const router = require("express").Router();

const userRoutes = require("./user");
const blogRoutes = require("./blog");
const commentsRoutes = require("./comments");

router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
