const Users = require('./Users');
const Blog = require('./Blog');

Users.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, Blog };