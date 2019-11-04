import { Router } from 'express';

import ClientController from './app/controllers/ClientController';
// import CarController from './app/controllers/CarController';
// import ServiceController from './app/controllers/ServiceController';

const routes = new Router();

routes.get('/clients', ClientController.index);
routes.post('/clients', ClientController.store);
routes.put('/clients/:id', ClientController.update);

export default routes;
