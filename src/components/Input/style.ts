import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip/Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #02566f;
  border-radius: 10px;
  padding: 1.2rem;
  width: 100%;

  border: 3px solid #00C4E3;
  color: #00C4E3;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.87rem;
  }

  ${(props) => props.isErrored && css`
    border: 3px solid #FF0000;
  `}

  ${(props) => props.isFocused && css`
    color: #ff9000;
    border: 3px solid #ff9000;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `}

input {
  flex: 1;
  background: transparent;
  border: 0;
  color: #f4ede8;
    &::placeholder {
    color: #00C4E3;
  }
}

svg {
  margin-right: 16px;
}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #FF0000;
    color: #fff;

    &::before {
      border-color: #FF0000 transparent;
    }
  }
`
