import React from 'react';
import PropTypes from 'prop-types';
import MailThreadsItem from './MailThreadsItem';

function MailThreads(props) {
  if (props.threadsIsLoading) {
    return (
      <h1 className="h2">
        Загрузка...
      </h1>
    )
  }

  const threads = props.threads.map(((thread) => {
    return (
      <MailThreadsItem
        key={thread.id}
        text={thread.snippet}
      />
    );
  }));

  return (
    <div>
      <h1 className="h2">
        Входящие
      </h1>
      <ul>
        {threads}
      </ul>
    </div>
  );
}

MailThreads.propTypes = {
  threads: PropTypes.array.isRequired,
  threadsIsLoading: PropTypes.bool,
};

MailThreads.defaultProps = {
  threads: [],
  threadsIsLoading: false,
};

export default MailThreads;
