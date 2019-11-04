import * as Yup from 'yup';
import Client from '../models/Client';

class ClientController {
  async index(req, res) {
    const clients = await Client.findAll();
    return res.json(clients);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.number().required(),
      sex: Yup.string().required(),
      tel: Yup.string().required(),
      cel: Yup.string().required(),
      address: Yup.string().required(),
      email: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check if client exists
    const checkClientExists = await Client.findOne({
      where: { cpf: req.body.cpf },
    });

    if (checkClientExists)
      return res.status(401).json({ error: 'Client already exists' });

    // Create client
    const client = await Client.create(req.body);

    return res.json(client);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cpf: Yup.string(),
      sex: Yup.string(),
      tel: Yup.string(),
      cel: Yup.string(),
      address: Yup.string(),
      email: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Get client cpf
    const { cpf } = req.body;

    // Verify if exists a client with params id
    const client = await Client.findByPk(req.params.id);

    if (!client) return res.status(404).json({ error: 'Client not found' });

    // Verify if already exist a client with this cpf
    if (cpf !== client.cpf) {
      const clientExists = await Client.findOne({
        where: { cpf },
      });

      if (clientExists) {
        return res.status(400).json({ error: 'User already exist' });
      }
    }

    // Update client
    await client.update(req.body);

    return res.json(client);
  }
}

export default new ClientController();
