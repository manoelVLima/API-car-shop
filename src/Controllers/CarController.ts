import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = { ...this.req.body };
    
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.res.status(500).json({ message: 'BAD REQUEST' });
    }
  }

  public async findAll() {
    try {
      const cars = await this.service.findAll();    
      return this.res.status(200).json(cars);
    } catch (error) {
      return this.res.status(500).json({ message: 'BAD REQUEST' });
    }
  }

  public async findById() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    try {
      const car = await this.service.findById(id);

      if (!car) return this.res.status(404).json({ message: 'Car not found' });

      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(500).json({ message: 'BAD REQUEST!' });
    }
  }
}
