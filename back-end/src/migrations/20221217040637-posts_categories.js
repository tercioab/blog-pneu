'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories',
      {
        postId: {
          type: Sequelize.INTEGER,
          field: 'post_id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'blog_posts',
            key: 'id',
          },
        },
        categoryId: {
          type: Sequelize.INTEGER,
          field: 'category_id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          primaryKey: true,
          references: {
            model: 'categories',
            key: 'id',
          },
        }
      });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('post_categories');
  }
};