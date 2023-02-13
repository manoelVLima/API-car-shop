import { Model, Schema, model, models } from 'mongoose';

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
}