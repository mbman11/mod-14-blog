const router = require('express').Router();
const Blog = require('../../models/Blog');


router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table 
  // Similar to `INSERT INTO` in plain SQL
  Blog.create({
    title: req.body.title,
    author: req.body.author,
    text: req.body.text
  })
    .then((newBlog) => {
      // Send the newly created row as a JSON object
      res.json(newBlog);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
  const blogId = req.params.id;

  Blog.destroy({
    where: { id: blogId }
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).json({ error: "Failed to delete" });
    });
});








module.exports = router;