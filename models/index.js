const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./User');
const Post = require('./Post')(sequelize, Sequelize.DataTypes);
const Comment = require('./Comment')(sequelize, Sequelize.DataTypes);

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

Comment.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Comment, { foreignKey: 'userId' });

module.exports = { User, Post, Comment, sequelize };
