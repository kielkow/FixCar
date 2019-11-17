import styled from 'styled-components';

const Header = styled.div`
  max-width: 1300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  background: #fff;

  h1 {
    font-size: 25px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    right: 0;
    margin-right: 50px;

    svg {
      margin-left: 10px;
    }
  }
`;

export default Header;
