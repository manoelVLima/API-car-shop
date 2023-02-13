import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

export default class CarService {
  public model = new CarModel();
  public createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);    
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const cars = await this.model.findAll();    
    const result = cars.map((car) => this.createCarDomain(car));
    
    return result;
  }

  public async findById(id: string) {
    const car = await this.model.findById(id);  
    return this.createCarDomain(car);
  }
}