module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('categories',
      [
        {
          id: 1,
          name: 'passeio',
        },
        {
          id: 2,
          name: 'corrida',
        },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};