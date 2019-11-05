import * as Yup from 'yup';
import Car from '../models/Car';

class ClientController {
  async index(req, res) {
    const cars = await Car.findAll();
    return res.json(cars);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      client_id: Yup.number()
        .integer()
        .required(),
      chassis: Yup.number()
        .integer()
        .required(),
      model: Yup.string().required(),
      year: Yup.number()
        .integer()
        .required(),
      sereal: Yup.string().required(),
      color: Yup.string().required(),
      type_motor: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check if client exists
    const checkCarExists = await Car.findOne({
      where: { sereal: req.body.sereal },
    });

    if (checkCarExists)
      return res.status(401).json({ error: 'Car already exists' });

    // Create client
    const car = await Car.create(req.body);

    return res.json(car);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      chassis: Yup.number().integer(),
      model: Yup.string(),
      year: Yup.number().integer(),
      sereal: Yup.string().required(),
      color: Yup.string(),
      type_motor: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Get client cpf
    const { sereal } = req.body;

    // Verify if exists a client with params id
    const car = await Car.findByPk(req.params.id);

    if (!car) return res.status(404).json({ error: 'Car not found' });

    // Verify if already exist a client with this cpf
    if (sereal !== car.sereal) {
      const carExists = await Car.findOne({
        where: { sereal },
      });

      if (carExists) {
        return res.status(400).json({ error: 'Car already exist' });
      }
    }

    // Update client
    await car.update(req.body);

    return res.json(car);
  }
}

export default new ClientController();
