import Sequelize from 'sequelize';

import Client from '../app/models/Client';
import Car from '../app/models/Car';
import Service from '../app/models/Service';

import databaseConfig from '../config/database';

const models = [Client, Car, Service];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
