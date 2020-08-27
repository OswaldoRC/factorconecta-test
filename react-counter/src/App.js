import React from 'react';

import { Provider, connect } from 'react-redux'
import { createStore, bindActionCreators } from 'redux'

import logo from './logo.svg';
import './App.css';

const Counter = ({ value, onCount }) => (
  <div style={{padding: '5rem'}}>
    <p>{ value }</p>
    <div>
      <button onClick={ onCount }>{value > 0 ? "AGAIN!" : "CLICK ME!"}</button>
    </div>
  </div> 
);

// Reducer
const counterReducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case 'COUNT':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}

// action
const onCount = () => {
  return { type: 'COUNT' }
}

// map state and actions
const mapStateToProps = (state) => {
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { onCount }, 
    dispatch
  );
}

const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(Counter)
const store = createStore(counterReducer);

const App = () => {
  return(
    <Provider store={store}>
      <ConnectedCounter/>
    </Provider>
  )
}

export default App;
