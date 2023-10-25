const router = require('express').Router();
const Blog = require('../models/Blog')

// route to get all blogs
router.get('/', async (req, res) => {
    const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render('all', {blogs});
    console.log(blogs);
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
      console.log(blogs)
      res.render('blog', blogs);
    } catch (err) {
        res.status(500).json(err);
    };     
});






router.get('/dashboard', async (req,res)=>{
  const blogData = await Blog.findAll().catch((err) => { 
    res.json(err);
  });
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  res.render('dashboard', {blogs});
  console.log(blogs);
  });





router.get('/create-post', (req,res)=>{
  res.render('createPost')
})



router.get('/login', (req,res)=>{
  res.render('login')
})


module.exports = router;


