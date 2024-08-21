// Purpose: to handle the home routes
const router = require("express").Router();
const { User, Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  try {
    const blogData = await Blog.findAll({
      where: { author: req.session.user_id },
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("dashboard", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-blog", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("new-blog", { logged_in: req.session.logged_in });
});

router.get("/edit-blog/:id", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  try {
    const blogData = await Blog.findByPk(req.params.id);
    const blog = blogData.get({ plain: true });

    if (blog.author !== req.session.user_id) {
      res
        .status(403)
        .json({ message: "You are not authorized to edit this blog" });
      return;
    }

    res.render("edit-blog", { blog, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User },
        { model: Comment, include: [{ model: User }] },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render("blogs", { blog, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
