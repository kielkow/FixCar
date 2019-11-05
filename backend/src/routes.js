import { Router } from 'express';

import ClientController from './app/controllers/ClientController';
import CarController from './app/controllers/CarController';
import ServiceController from './app/controllers/ServiceController';

const routes = new Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);

routes.get('/clients/cars', CarController.index);
routes.post('/clients/cars', CarController.store);
routes.put('/clients/cars/:id', CarController.update);

routes.get('/clients/cars/services', ServiceController.index);
routes.post('/clients/cars/services', ServiceController.store);
routes.put('/clients/cars/services/:id', ServiceController.update);

export default routes;
