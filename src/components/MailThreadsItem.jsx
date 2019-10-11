import React from 'react';
import PropTypes from 'prop-types';

function MailThreadsItem({ text }) {
  return <li>{text}</li>;
}

MailThreadsItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MailThreadsItem;
