import React from 'react';
import PropTypes from 'prop-types';
import MailThreadsItem from './MailThreadsItem';

function MailThreads({ threads, threadsIsLoading }) {
  if (threadsIsLoading) {
    return (
      <h1 className="h2">
        Загрузка...
      </h1>
    );
  }

  return (
    <div>
      <h1 className="h2">
        Входящие
      </h1>
      <ul>
        {threads.map(((thread) => (
          <MailThreadsItem
            key={thread.id}
            text={thread.snippet}
          />
        )))}
      </ul>
    </div>
  );
}

MailThreads.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object),
  threadsIsLoading: PropTypes.bool,
};

MailThreads.defaultProps = {
  threads: [],
  threadsIsLoading: false,
};

export default MailThreads;
