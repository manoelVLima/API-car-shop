import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.put('/:id', (req, res, next) => new CarController(req, res, next).update());
routes.get('/', (req, res, next) => new CarController(req, res, next).findAll());
routes.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
routes.post('/', (req, res, next) => new CarController(req, res, next).create());

export default routes;