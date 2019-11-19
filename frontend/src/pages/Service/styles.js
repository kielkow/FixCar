import styled, { css, keyframes } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  max-width: 500px;
  border: 1px solid #eee;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  flex: 1;
  background: #71c159;
  max-width: 100px;
  border: 1px solid #eee;
  margin: 5px;
  margin-top: 20px;
  margin-left: 375px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  font-style: bold;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const SubmitButtonBack = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  flex: 1;
  background: #7159c1;
  max-width: 100px;
  border: 1px solid #eee;
  margin: 5px;
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 18px;
  color: #fff;
  font-style: bold;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
