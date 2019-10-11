import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function AppLoader() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Spinner
        animation="border"
        variant="primary"
        size="md"
      />
      <p className="mt-3">
        Пожалуйста, подождите
      </p>
    </div>
  );
}
