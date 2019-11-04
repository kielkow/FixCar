module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('services', {
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
      car_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cars', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      otde: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      un: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      expect_min: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      expect_max: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      bar_code: {
        type: Sequelize.INTEGER,
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
      canceled_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('services');
  },
};
