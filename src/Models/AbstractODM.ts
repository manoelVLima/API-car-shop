import { Model, Schema, model, models, UpdateQuery } from 'mongoose';
import { ObjectId } from 'mongodb';

export default abstract class AbstractModel<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected name: string;

  constructor(name: string, schema: Schema) {
    this.schema = schema;
    this.name = name;
    this.model = models[this.name] || model(this.name, this.schema);
  }

  public async create(car: T): Promise<T> {
    return this.model.create({ ...car });
  }

  public async findAll(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  public async update(id:string, obj:UpdateQuery<T>) {
    return this.model.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...obj } },
    );
  }
}