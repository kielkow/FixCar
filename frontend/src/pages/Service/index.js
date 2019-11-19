import React, { Component } from 'react';
import { FaUserCircle, FaTools, FaSpinner } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ContainerCreateClient from '../../components/ContainerCreateClient';

import { Form, Input, SubmitButton, SubmitButtonBack } from './styles';

export default class Car extends Component {
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
            <FaTools />
            Create service
          </h1>
          <Form>
            <Input type="text" placeholder="Name..." />
            <Input type="text" placeholder="RG..." />
            <Input type="text" placeholder="Address..." />
            <Input type="text" placeholder="Cel Number..." />

            <div>
              <SubmitButtonBack loading={loading}>
                <Link to="/" textDecoration={null}>
                  {loading ? (
                    <FaSpinner color="#FFF" size={14} />
                  ) : (
                    <IoMdArrowRoundBack color="#FFF" size={14} />
                  )}
                </Link>
              </SubmitButtonBack>
              <SubmitButton loading={loading}>
                {loading ? <FaSpinner color="#FFF" size={14} /> : 'Save'}
              </SubmitButton>
            </div>
          </Form>
        </ContainerCreateClient>
      </>
    );
  }
}
