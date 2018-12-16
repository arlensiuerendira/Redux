import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  increment1: () => dispatch({ type: 'ADD1' }),
  increment10: () => dispatch({ type: 'ADD10' }),
  decrement1: () => dispatch({ type: 'REMOVE1' }),
  decrement10: () => dispatch({ type: 'REMOVE10' }),
  reset: () => dispatch({ type: 'RESET' })
});

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = ({
  counter,
  increment1,
  increment10,
  decrement1,
  decrement10,
  reset
}) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment1}>Increment 1</button>
      <button onClick={increment10}>Increment 10</button>
      <button onClick={decrement1}>Decrease 1</button>
      <button onClick={decrement10}>Decrease 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);
