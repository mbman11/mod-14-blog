const router = require('express').Router();
const Users = require('../../models/Users');

router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table 
  // Similar to `INSERT INTO` in plain SQL
  Users.create({
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password
  })
    .then((newUser) => {
      // Send the newly created row as a JSON object
      res.json(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.delete('/delete/:id', (req, res) => {
//   const blogId = req.params.id;

//   Blog.destroy({
//     where: { id: blogId }
//   })
//     .then(() => {
//       res.status(204).send();
//     })
//     .catch((err) => {
//       res.status(500).json({ error: "Failed to delete" });
//     });
// });




module.exports = router;