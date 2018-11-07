import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import BalancesContainer from '../containers/BalancesContainer';
import NewRoundContainer from '../containers/NewRoundContainer';

class Content extends React.Component {
  componentDidMount() {
    // store.dispatch(fetchCategories());
    const socket = io('localhost:8080');
    socket.on('refresh', () => {
      // /api/get-balances
      console.log('refresh received');
    });
  }

  render() {
    const { stage } = this.props;
    return (
      <div className="app">
        {stage === 'balances' && <BalancesContainer />}
        {stage === 'newRound' && <NewRoundContainer />}
      </div>
    );
  }
}

// stage/display to be object in future
Content.propTypes = {
  stage: PropTypes.string,
};

export default Content;