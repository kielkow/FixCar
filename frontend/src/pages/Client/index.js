import React, { Component } from 'react';
import { FaUserCircle, FaUserAlt, FaSpinner } from 'react-icons/fa';

import Header from '../../components/Header';
import ContainerCreateClient from '../../components/ContainerCreateClient';

import { Form, Input, SubmitButton } from './styles';

export default class Client extends Component {
  state = {
    loading: false,
  };

  // Carregar os dados do localStorage
  componentDidMount() {}

  // Salvar os dados do localStorage
  componentDidUpdate() {}

  handleInputChange = e => {
    e.preventDeafult();
  };

  handleSubmit = async e => {
    e.preventDeafult();
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Header>
          <h1>FixCar</h1>
          <div>
            Matheus
            <FaUserCircle />
          </div>
        </Header>
        <ContainerCreateClient>
          <h1>
            <FaUserAlt />
            Create client
          </h1>
          <Form>
            <Input type="text" placeholder="Name..." />
            <Input type="text" placeholder="RG..." />
            <Input type="text" placeholder="Address..." />
            <Input type="text" placeholder="Cel Number..." />

            <SubmitButton loading={loading}>
              {loading ? <FaSpinner color="#FFF" size={14} /> : 'Save'}
            </SubmitButton>
          </Form>
        </ContainerCreateClient>
      </>
    );
  }
}
