module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      username: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      email: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};