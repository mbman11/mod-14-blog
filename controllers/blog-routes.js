const router = require('express').Router();
const Blog = require('../models/blog')

// route to get all blogs
router.get('/', async (req, res) => {
    // We find all blogs in the db and set the data equal to blogData
    const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
    });
    // We use map() to iterate over blogData and then add .get({ plain: true }) each object to serialize it. 
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // We render the template, 'all', passing in blogs, a new array of serialized objects.
    res.render('all', { blogs });
    });

// route to get one blog
router.get('/blogs/:id', async (req, res) => {
  try{ 
      const blogData = await Blog.findByPk(req.params.id);
      if(!blogData) {
          res.status(404).json({message: 'No blog with this id!'});
          return;
      }
      const blogs = blogData.get({ plain: true });
      res.render('blog', blogs);
    } catch (err) {
        res.status(500).json(err);
    };     
});

router.get('/dashboard', (req,res)=>{
  res.render('dashboard')
})

router.get('/create-post', (req,res)=>{
  res.render('createPost')
})

module.exports = router;