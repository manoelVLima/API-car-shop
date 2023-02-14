import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

export default class MotorcycleService {
  public model = new MotorcycleModel();
  public createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.model.create(motorcycle);      
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const motorcycles = await this.model.findAll();    
    const result = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    
    return result;
  }

  public async findById(id: string) {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }
    const motorcycle = await this.model.findById(id);  

    if (!motorcycle) throw new Error('Motorcycle not found');

    return this.createMotorcycleDomain(motorcycle);
  }
}