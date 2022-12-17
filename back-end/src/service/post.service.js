const { BlogPost, Category } = require('../models');
const { Op } = require('sequelize');

const allPosts = async () => BlogPost.findAll({
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
   
       include: [
         { model: Category, as: 'categories', through: { attributes: [] } },
       ],
    });
     
    if (!post) {
     return { status: 404, message: 'Post does not exist' };
   }
   
   return { status: 200, post }; 
};
   
const findPost = async (titleOrContent) => BlogPost
    .findAll({
        where: { [Op.or]: [
            { title: { [Op.like]: `%${titleOrContent}%` } },
          ] },
        include: [
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      });


module.exports = {
    allPosts,
    getPostById,
    findPost,
}