import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.button`
  background: #ff9000;
  height: 3rem;
  border-radius: .5rem;
  border: 0;
  padding: 0 1.2rem;
  width: 100%;
  color: #312e38;
  margin-top: 1rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')}
  }

`
