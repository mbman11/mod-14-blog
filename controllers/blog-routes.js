
const router = require('express').Router();
const path = require('path');


// router.get('/', async (req,res)=> {
//   res.sendFile(path.join(__dirname,'../views/index.html'))
// })


router.get('/', (req,res)=>{
  res.render('all')
})

router.get('/about', (req,res)=>{
  res.render('about')
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