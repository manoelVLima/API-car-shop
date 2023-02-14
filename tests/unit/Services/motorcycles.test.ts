import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const motorcycleReq: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const id = '63eadcc5eb2e10ab9354defc';

const motorcycleRes: IMotorcycle = {
  id: '63eadcc5eb2e10ab9354defc',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

describe('Testa a camada Service para a rota /motorcycles', function () {
  afterEach(sinon.restore);
  it('Testa se o metodo POST com a função de criar novas motorcycles', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleRes);

    const result = await new MotorcycleService().create(motorcycleReq);
    expect(result).to.be.deep.equal(motorcycleRes);
  });
  it('Testa se o metodo GET com a função de buscar todos as motorcycles', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleRes]);

    const result = await new MotorcycleService().findAll();
    expect(result).to.be.deep.equal([motorcycleRes]);
  });

  it('Testa se o metodo GET com a função de buscar por Id, com Id válido', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleRes);

    const result = await new MotorcycleService().findById(id);
    expect(result).to.be.deep.equal(motorcycleRes);
  });

  it('Testa se o metodo GET com a função de buscar por Id, quando falha', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await new MotorcycleService().findById(id);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  });

  it('Testa se o metodo GET com a função de buscar por Id, com id invalido', async function () {
    try {
      await new MotorcycleService().findById('id');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });

  it('Testa se o metodo PUT com a função de atualizar uma motorcyle', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleRes);
    sinon.stub(Model, 'updateOne').resolves();

    const result = await new MotorcycleService().update(id, motorcycleReq);
    expect(result).to.be.deep.equal(motorcycleRes);
  });
});