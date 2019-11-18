import styled from 'styled-components';

const ContainerCar = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: 30px;
  margin: 20px;

  &:hover {
    color: #7159c1;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default ContainerCar;
