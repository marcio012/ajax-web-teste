import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './style';

export default function Tolst() {
  return (
    <Container>
      <Toast description>
        <FiAlertCircle size={30} />
        <div>
          <strong>Alerta!</strong>
          <p>Algo de certo está errado.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" description={false}>
        <FiAlertCircle size={30} />
        <div>
          <strong>Login com sucesso!</strong>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" description>
        <FiAlertCircle size={30} />
        <div>
          <strong>Error!</strong>
          <p>Não foi possível logar na aplicação.</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
}
