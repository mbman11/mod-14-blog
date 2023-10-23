
// const router = require('express').Router();
// const path = require('path');


// // router.get('/', async (req,res)=> {
// //   res.sendFile(path.join(__dirname,'../views/index.html'))
// // })
// const blogs = [
//   {
//     id: 1,
//     title: 'How To Code',
//     author: 'John Foe',
//     text: 'coding is hard and it is driving me crazy... one day ill get it but its pissing me off',
//     active: true,
//   },
//   {
//     id: 2,
//     title: 'Do something good',
//     author: 'Joe Doe',
//     text: 'this is a psa to do something good in the world because theres too much bad already!',
//     active: false,
//   },
// ];


// // get all blogs
// router.get('/', (req,res)=>{
//   res.render('all', {blogs})
// })

// // router.get('/blogs', (req,res)=>{
// //   return res.render('all')
// // })

// router.get('/blogs/:num', (req,res)=>{
//   return res.render('blog', blogs[req.params.num -1])
// });



// // router.get('/about', async (req,res) => {
// //   res.sendFile(path.join(__dirname,'../views/about.html'))
// // })

// // router.get('/blogs/create', async (req,res)=>{
// //   res.sendFile(path.join(__dirname, '../views/create.html'))
// // })

// module.exports = router;





const router = require('express').Router();
const Blog = require('../models/blog')

// route to get all blogs
router.get('/', async (req, res) => {
    // We find all dishes in the db and set the data equal to dishData
    const blogData = await Blog.findAll().catch((err) => { 
      res.json(err);
    });
    // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    // We render the template, 'all', passing in dishes, a new array of serialized objects.
    res.render('all', { blogs });
    });

// route to get one dish
router.get('/blog/:id', async (req, res) => {
  try{ 
      const blogData = await Blog.findByPk(req.params.id);
      if(!blogData) {
          res.status(404).json({message: 'No blog with this id!'});
          return;
      }
      const blog = blogData.get({ plain: true });
      res.render('blog', dish);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;