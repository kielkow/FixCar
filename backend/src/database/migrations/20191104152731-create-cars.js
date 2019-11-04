module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cars', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: { model: 'clients', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      chassis: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      sereal: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type_motor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('cars');
  },
};
