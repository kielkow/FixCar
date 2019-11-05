import Sequelize, { Model } from 'sequelize';

class Car extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        chassis: Sequelize.STRING,
        model: Sequelize.STRING,
        year: Sequelize.INTEGER,
        sereal: Sequelize.STRING,
        color: Sequelize.STRING,
        type_motor: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
  }
}

export default Car;
