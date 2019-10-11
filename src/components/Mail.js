import React from 'react';
import MailThreads from './MailThreads';
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";

function Mail(props) {
  return (
    <Container
      fluid={true}
      className="py-3"
    >
      <MailThreads
        threads={props.threads}
        threadsIsLoading={props.threadsIsLoading}
      />
    </Container>
  )
}

Mail.propTypes = {
  threads: PropTypes.array.isRequired,
  threadsIsLoading: PropTypes.bool,
};

Mail.defaultProps = {
  threads: [],
  threadsIsLoading: false,
};

export default Mail;
