import React from 'react';
import PropTypes from 'prop-types';
// import Button from './Button';
import NewRoundCounterpart from './NewRoundCounterpart';
import '../../styles/components/NewRound.scss';

function NewRound({
  counterparts,
  getAmount,
  totalAmount,
  getNewRound,
  getStage,
  handleRoundCounterparts,
}) {
  return (
    <section>
      <div className="title-bar">
        <p className="title-bar__back" onClick={() => getStage('balances')}>
          Back
        </p>
        <h2 className="title-bar__title">New Round</h2>
      </div>
      <div className="new-round__amount">
        <input value={totalAmount} onChange={event => getAmount(event.target.value)} />
      </div>
      <div className="new-round__users">
        {Object.values(counterparts).map(counterpart => (
          <div>
            <NewRoundCounterpart counterpart={counterpart} />
            <button
              type="button"
              onClick={handleRoundCounterparts}
              value={counterpart.counterpartId}
              key={counterpart.counterpartId}
            >
              {counterpart.username}
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="button" onClick={getNewRound}>
        BUY ROUND{' '}
      </button>
    </section>
  );
}
NewRound.propTypes = {
  counterparts: PropTypes.object,
  getStage: PropTypes.func,
  getAmount: PropTypes.func,
  totalAmount: PropTypes.string,
  getNewRound: PropTypes.func.isRequired,
  handleRoundCounterparts: PropTypes.func.isRequired,
};

export default NewRound;
