import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/root'
import './sass/style'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { createStore } from 'redux'
import { connect, Provider } from 'react-redux';

const initialState = {
  value: 1
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    default:
      return state
  }
}

function increment() {
  return { type: 'INCREMENT' }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(increment()) }
  }
}

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
