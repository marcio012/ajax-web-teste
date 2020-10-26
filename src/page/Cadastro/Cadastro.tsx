import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import logo from '../../assets/img/ajax.svg';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

export default function Cadastro() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    try {
      const validation = Yup.object().shape({
        firstName: Yup.string().required('Nome obrigatório'),
        lastName: Yup.string().required('Sobrenome é obrigatório'),
        email: Yup.string()
          .required('Digite um e-mail válido')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'Senha mínimo 6 digitos'),
      });

      await validation.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log('ERROR :>> ', error);
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="logo ajax" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="firstName" placeholder="Nome" icon={FiUser} />

          <Input name="lastName" placeholder="Nome" icon={FiUser} />

          <Input name="email" placeholder="E-mail" icon={FiMail} />

          <Input
            name="password"
            type="password"
            placeholder="password"
            icon={FiLock}
          />

          <Button>Cadastrar</Button>
        </Form>

        <Link to="/login">
          <FiArrowLeft />
          Voltar para Login
        </Link>
      </Content>
    </Container>
  );
}
