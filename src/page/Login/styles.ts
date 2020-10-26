import styled from 'styled-components'
import { shade } from 'polished'
import imagemLogin from "../../assets/img/computer.jpeg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 45rem;
  padding: 3rem;

  img {
    width: 18rem;
  }

  form {

    margin: 4rem 0;
    text-align: center;

    h1 {
      margin-bottom: 3rem;
      color: #FE9000;
    }

    a {
      color: #02566F;
      display: block;
      margin-top: 1rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#02566F')}
      }
    }

    @media(min-width: 600px) {
      width: 60%;
    }


  }
  > a {
      color: #ff9000;
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: color 0.2s;

      svg {
        margin-right: 0.6rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')}
      }
  }
`

export const Background = styled.div`
  display: flex;
  flex: 1;
  background: url(${imagemLogin}) no-repeat center;
  background-size: cover;

`
