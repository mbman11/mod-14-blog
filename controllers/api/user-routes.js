const router = require('express').Router();
const {Users} = require('../../models');

router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table 
  // Similar to `INSERT INTO` in plain SQL
  Users.create({
    user_name: req.body.userName,
    email: req.body.email,
    password: req.body.password
  })
    .then((newUser) => {
      // Send the newly created row as a JSON object
      console.log(newUser);
      res.json(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});






router.post('/login', async (req, res) => {

  console.log(req.body);
  try {
    
    const userData = await Users.findOne({ where: { user_name: req.body.userName } });
// changed to findByPk from findAll()
console.log(userData);


    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
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