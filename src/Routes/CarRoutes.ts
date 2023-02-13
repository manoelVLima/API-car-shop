import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();
// const carController = new CarController(, res, next);
routes.post('/', (req, res, next) => new CarController(req, res, next).create());

export default routes;