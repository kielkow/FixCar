import * as Yup from 'yup';
import Service from '../models/Service';

class ClientController {
  async index(req, res) {
    const services = await Service.findAll();
    return res.json(services);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      client_id: Yup.number()
        .integer()
        .required(),
      car_id: Yup.number()
        .integer()
        .required(),
      otde: Yup.string().required(),
      un: Yup.string().required(),
      description: Yup.string().required(),
      expect_min: Yup.date().required(),
      expect_max: Yup.date().required(),
      price: Yup.number().required(),
      bar_code: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check if client exists
    const checkServiceExists = await Service.findOne({
      where: { otde: req.body.otde },
    });

    if (checkServiceExists)
      return res.status(401).json({ error: 'Service already exists' });

    // Create client
    const service = await Service.create(req.body);

    return res.json(service);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      client_id: Yup.number()
        .integer()
        .required(),
      car_id: Yup.number()
        .integer()
        .required(),
      otde: Yup.string().required(),
      un: Yup.string().required(),
      description: Yup.string().required(),
      expect_min: Yup.date().required(),
      expect_max: Yup.date().required(),
      price: Yup.number().required(),
      bar_code: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Get client cpf
    const { otde } = req.body;

    // Verify if exists a client with params id
    const service = await Service.findByPk(req.params.id);

    if (!service) return res.status(404).json({ error: 'Service not found' });

    // Verify if already exist a client with this cpf
    if (otde !== service.otde) {
      const serviceExists = await Service.findOne({
        where: { otde },
      });

      if (serviceExists) {
        return res.status(400).json({ error: 'Service already exist' });
      }
    }

    // Update client
    await service.update(req.body);

    return res.json(service);
  }
}

export default new ClientController();
