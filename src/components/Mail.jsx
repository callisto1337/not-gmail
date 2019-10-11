import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import MailThreads from './MailThreads';

function Mail({ threads, threadsIsLoading }) {
  return (
    <Container
      fluid
      className="py-3"
    >
      <MailThreads
        threads={threads}
        threadsIsLoading={threadsIsLoading}
      />
    </Container>
  );
}

Mail.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  threadsIsLoading: PropTypes.bool.isRequired,
};

export default Mail;
