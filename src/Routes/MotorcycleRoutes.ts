import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).update());
routes.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
routes.get('/', (req, res, next) => new MotorcycleController(req, res, next).findAll());
routes.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).findById());

export default routes;