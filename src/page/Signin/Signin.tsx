import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logo from '../../assets/img/ajax.svg';

export default function Signin() {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="logo ajax" />
        <form>
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
    </Container>
  );
}
