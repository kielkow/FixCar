import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Header from '../../components/Header';

export default class Car extends Component {
  state = {};

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
    return (
      <>
        <Header>
          <h1>FixCar</h1>
          <div>
            Matheus
            <FaUserCircle />
          </div>
        </Header>
      </>
    );
  }
}
