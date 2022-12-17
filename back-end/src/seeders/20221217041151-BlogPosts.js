
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('blog_posts',
      [
        {
          id: 1,
          title: 'Post do Ano',
          image: "exemplo",
          content: '<h1> titulo </h1> ',
          published: new Date('2011-08-01T19:58:00.000Z'),
        },
        {
          id: 2,
          title: 'Vamos que vamos',
          image: "exemplo",
          content: '<h1> titulo </h1> ',
          published: new Date('2011-08-01T19:58:00.000Z'),
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('blog_posts', null, {});
  },
};