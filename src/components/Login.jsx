import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Login({ handleLogin }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1>
        Добро пожаловать
      </h1>
      <h2 className="h5">
        Пожалуйста, авторизируйтесь
      </h2>
      <Button
        variant="danger"
        className="mt-3"
        onClick={handleLogin}
      >
        Войти
      </Button>
    </div>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
