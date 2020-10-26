import styled, { css } from 'styled-components';

interface TolstI {
  type?: 'success' | 'error' | 'info';
  description: boolean
}

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;

const toastType = {
  info: css`
    background: #ee0;
    color: #333;
  `,
  success: css`
    background: #2e652a;
    color: #e6fffa;
  `,
  error: css`
    background: #ff0000;
    color: #e6fffa;
  `
};

export const Toast = styled.div<TolstI>`
  width: 360px;

  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  & + div {
    margin-top: 4px;
  }

  ${props => toastType[props.type || 'info']}

  > svg {
    margin: 4px 12px 0;
  }

  div {
    flex: 1

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props => !props.description && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}

`;
