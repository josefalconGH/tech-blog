// Purpose: to handle the blog routes
const router = require("express").Router();
const { Blog } = require("../../models");

router.post("/", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  try {
    const newBlog = await Blog.create({
      ...req.body,
      author: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  try {
    const [affectedRows] = await Blog.update(req.body, {
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
    return;
  }

  try {
    const affectedRows = await Blog.destroy({
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
