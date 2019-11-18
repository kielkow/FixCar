import React, { Component } from 'react';
import {
  FaUserCircle,
  FaUserAlt,
  FaCar,
  FaTools,
  FaSearch,
  FaSpinner,
  FaPlus,
  FaWarehouse,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../../components/Header';
import Container from '../../components/Container';
import ContainerClient from '../../components/ContainerClient';
import ContainerCar from '../../components/ContainerCar';
import ContainerService from '../../components/ContainerService';
import ContainerStock from '../../components/ContainerStock';

import { Form, SubmitButton, SubmitButtonAdd, List, Input } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    try {
      e.preventDefault();

      this.setState({ loading: true });

      const { newRepo, repositories } = this.state;

      const checkRepoExists = repositories.find(repo => repo.name === newRepo);

      if (checkRepoExists) throw new Error('repo already exists');

      const response = await api.get(`/repos/${newRepo}`);

      if (response.status !== 200) throw new Error('repo not found');

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
        loading: false,
        error: false,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        newRepo: '',
        loading: false,
        error: true,
      });
    }
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;

    return (
      <>
        <Header>
          <h1>FixCar</h1>
          <div>
            Matheus
            <FaUserCircle />
          </div>
        </Header>
        <Container>
          <div id="stock">
            <ContainerStock>
              <h1>
                <FaWarehouse />
                Stock
              </h1>
            </ContainerStock>
          </div>
          <div id="client">
            <ContainerClient>
              <h1>
                <FaUserAlt />
                Clients
              </h1>

              <Form onSubmit={this.handleSubmit}>
                <Input
                  type="text"
                  placeholder="Search by a client..."
                  value={newRepo}
                  onChange={this.handleInputChange}
                  error={error}
                />

                <SubmitButton loading={loading}>
                  {loading ? (
                    <FaSpinner color="#FFF" size={14} />
                  ) : (
                    <FaSearch color="#FFF" size={14} />
                  )}
                </SubmitButton>

                <SubmitButtonAdd>
                  <Link to="/client">
                    <FaPlus color="#fff" size={14} />
                  </Link>
                </SubmitButtonAdd>
              </Form>

              <List>
                {repositories.map(repository => (
                  <li key={repository.name}>
                    <span>{repository.name}</span>
                    <Link
                      to={`/repository/${encodeURIComponent(repository.name)}`}
                    >
                      Detalhes
                    </Link>
                  </li>
                ))}
              </List>
            </ContainerClient>
            <div id="car_service">
              <ContainerCar>
                <h1>
                  <FaCar />
                  Cars
                </h1>

                <Form onSubmit={this.handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Search by a car..."
                    value={newRepo}
                    onChange={this.handleInputChange}
                    error={error}
                  />

                  <SubmitButton loading={loading}>
                    {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      <FaSearch color="#FFF" size={14} />
                    )}
                  </SubmitButton>

                  <SubmitButton>
                    <FaPlus color="#fff" size={14} />
                  </SubmitButton>
                </Form>

                <List>
                  {repositories.map(repository => (
                    <li key={repository.name}>
                      <span>{repository.name}</span>
                      <Link
                        to={`/repository/${encodeURIComponent(
                          repository.name
                        )}`}
                      >
                        Detalhes
                      </Link>
                    </li>
                  ))}
                </List>
              </ContainerCar>
              <ContainerService>
                <h1>
                  <FaTools />
                  Services
                </h1>

                <Form onSubmit={this.handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Search by a service..."
                    value={newRepo}
                    onChange={this.handleInputChange}
                    error={error}
                  />

                  <SubmitButton loading={loading}>
                    {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      <FaSearch color="#FFF" size={14} />
                    )}
                  </SubmitButton>

                  <SubmitButton>
                    <FaPlus color="#fff" size={14} />
                  </SubmitButton>
                </Form>

                <List>
                  {repositories.map(repository => (
                    <li key={repository.name}>
                      <span>{repository.name}</span>
                      <Link
                        to={`/repository/${encodeURIComponent(
                          repository.name
                        )}`}
                      >
                        Detalhes
                      </Link>
                    </li>
                  ))}
                </List>
              </ContainerService>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
