import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

export default class AppLoader extends React.Component {
  render() {
    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <Spinner
          animation="border"
          variant="primary"
          size="md"
        />
      </div>
    );
  }
}
