import React from 'react';
import PropTypes from 'prop-types';

function MailThreadsItem(props) {
  return <li>{props.text}</li>;
}

MailThreadsItem.propTypes = {
  text: PropTypes.string.isRequired,
};

MailThreadsItem.defaultProps = {
  text: '',
};

export default MailThreadsItem;
