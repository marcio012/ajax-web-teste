import styled from 'styled-components'
import { shade } from 'polished'
import imagemLogin from "../../assets/img/computer.jpeg"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;


  img {
    width: 15rem;

    @media (min-width: 900px) {

    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100vw;


  form {
    margin: 4rem 0;
    width: 20rem;
    text-align: center;

    h1 {
      margin-bottom: 3rem;
      color: #FE9000;

    }

    input {
      background: #02566F;
      border-radius: 10px;
      border: 2px solid #023F52;
      padding: 1.2rem;
      width: 100%;
      color: #F4EDE8;

      &::placeholder {
        color: #fff;
      }

      & + input {
        margin-top: 0.87rem;
      }
    }

    button {
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
    }

    a {
      color: #F4EDE8;
      display: block;
      margin-top: 1rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')}
      }
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

  @media (min-width: 900px) {
    max-width: 700px;
  }
`

export const Background = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: flex;
    background-color: green;
    flex: 1;
    background: url(${imagemLogin}) no-repeat center;
    background-size: cover;
  }

`
