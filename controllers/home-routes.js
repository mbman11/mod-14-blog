const router = require('express').Router();
// const Blog = require('../models/Blog')
const {Users, Blog} = require('../models/')

// route to get all blogs
router.get('/', async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render('all', { blogs,logged_in: req.session.logged_in  });
});




// route to get one blog
router.get('/blogs/:id', async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);
    if (!blogData) {
      res.status(404).json({ message: 'No blog with this id!' });
      return;
    }
    const blogs = blogData.get({ plain: true });
    res.render('blogs', { blogs });
  } catch (err) {
    res.status(500).json(err);
  };
});





// route to get dashboard with blogs
router.get('/dashboard', async (req, res) => {
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));

  const userData = await Users.findAll();
  const users = userData.map((user) => user.get({ plain: true }));
  console.log(users); // This will log the users to the console

  res.render('dashboard', { blogs });
  console.log(blogs);

});








router.get('/create-post', (req, res) => {
  res.render('createPost')
})



router.get('/create-user', (req, res) => {
  res.render('createUser')
})


router.get('/login', (req, res) => {
  res.render('login')
})


module.exports = router;


