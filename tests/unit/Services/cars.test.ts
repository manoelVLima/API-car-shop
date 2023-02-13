import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carReq: ICar = {
  model: 'Marea',
  color: 'Black',
  year: 2002,
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
};

const id = '63eab41ce33423ed43c28cc5';
const carRes: ICar = {
  id: '63eab41ce33423ed43c28cc5',
  model: 'Marea',
  color: 'Black',
  year: 2002,
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
};

describe('Testa a camada Service para a rota /cars', function () {
  afterEach(sinon.restore);
  it('Testa se o metodo POST com a função de criar novos carros', async function () {
    sinon.stub(Model, 'create').resolves(carRes);

    const result = await new CarService().create(carReq);
    expect(result).to.be.deep.equal(carRes);
  });
  it('Testa se o metodo GET com a função de buscar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([carRes]);

    const result = await new CarService().findAll();
    expect(result).to.be.deep.equal([carRes]);
  });

  it('Testa se o metodo GET com a função de buscar por Id, com Id válido', async function () {
    sinon.stub(Model, 'findById').resolves(carRes);

    const result = await new CarService().findById(id);
    expect(result).to.be.deep.equal(carRes);
  });

  it('Testa se o metodo GET com a função de buscar por Id, quando falha', async function () {
    sinon.stub(Model, 'findOne').resolves(null);

    try {
      await new CarService().findById(id);
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }
  });

  it('Testa se o metodo GET com a função de buscar por Id, com id invalido', async function () {
    try {
      await new CarService().findById('id');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  });
});
