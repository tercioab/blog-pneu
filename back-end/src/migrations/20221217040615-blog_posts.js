

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('blog_posts',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type:Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING,
        },
        content: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
          },
          published:  {
            allowNull: false,
            type: Sequelize.DATE
          }
      });

  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('blog_posts');
  }
};