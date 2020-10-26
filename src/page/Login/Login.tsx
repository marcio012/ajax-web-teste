import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';
import logo from '../../assets/img/ajax.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/ApiContext';

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const formRef = useRef<FormHandles>(null);

  const { user, loginApi } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      formRef.current?.setErrors({});
      try {
        const validation = Yup.object().shape({
          email: Yup.string()
            .required('Digite um e-mail válido')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await validation.validate(data, {
          abortEarly: false,
        });

        loginApi({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
        }

        

      }
    },
    [loginApi],
  );

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="logo ajax" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" placeholder="E-mail" icon={FiMail} />

          <Input name="password" placeholder="Password" icon={FiLock} />

          <Button>Logar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="login">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
    </Container>
  );
}
