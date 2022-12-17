const { BlogPost, Category } = require('../models');

const allPosts = async () => BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});
  
module.exports = {
    allPosts
}