
const router = require('express').Router();
const path = require('path');


// router.get('/', async (req,res)=> {
//   res.sendFile(path.join(__dirname,'../views/index.html'))
// })
const blogs = [
  {
    id:1,
    title: 'How To Code',
    author: 'John Foe'
  },
  {
    id:2,
    title: 'Do something good',
    author: 'Joe Doe'
  }
]

router.get('/', (req,res)=>{
  res.render('home', { blogs })
})

router.get('/blogs', (req,res)=>{
  res.render('blogs')
})

router.get('/blogs/create', (req,res) => {
  res.render('create')
})

// router.get('/about', async (req,res) => {
//   res.sendFile(path.join(__dirname,'../views/about.html'))
// })

// router.get('/blogs/create', async (req,res)=>{
//   res.sendFile(path.join(__dirname, '../views/create.html'))
// })

module.exports = router;