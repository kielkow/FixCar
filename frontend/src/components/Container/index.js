import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  border: 0.5px solid black;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  #stock {
    width: 700px;
    border: 0.5px solid black;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #client {
    border: 0.5px solid black;
    margin: 10px;
    display: flex;
    flex-direction: column;
  }

  #car_service {
    border: 0.5px solid black;
    margin: 5px;
    display: flex;
    flex-direction: row;
  }
`;

export default Container;
