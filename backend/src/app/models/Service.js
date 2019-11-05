import Sequelize, { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: Sequelize.INTEGER,
        car_id: Sequelize.INTEGER,
        otde: Sequelize.STRING,
        un: Sequelize.STRING,
        description: Sequelize.STRING,
        expect_min: Sequelize.DATE,
        expect_max: Sequelize.DATE,
        price: Sequelize.FLOAT,
        bar_code: Sequelize.INTEGER,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Client, { foreignKey: 'client_id', as: 'client' });
    this.belongsTo(models.Car, { foreignKey: 'car_id', as: 'car' });
  }
}

export default Service;
