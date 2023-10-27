const sequelize = require('../config/connection');
const Blog = require('../models/Blog.js');
const User = require('../models/Users.js');
const blogData = require('./blog-seeds.json');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(userData,{
    individualHooks: true,
    returning: true
  })

  process.exit(0);
};

seedDatabase();