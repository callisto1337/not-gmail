import React from 'react';
import { Button } from 'react-bootstrap'

export default function Login(props) {
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
        onClick={props.handleLogin}
      >
        Войти
      </Button>
    </div>
  )
}
