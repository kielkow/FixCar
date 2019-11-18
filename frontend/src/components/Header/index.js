import styled from 'styled-components';

const Header = styled.div`
  width: 1300px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  background: #fff;

  h1 {
    font-size: 25px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
    margin-left: 1090px;

    svg {
      margin-left: 10px;
    }
  }
`;

export default Header;
