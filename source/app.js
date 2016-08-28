import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/root'
import './sass/style'
import Reducer from './reducer'
import { increment } from './actions'

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { createStore } from 'redux'
import { connect, Provider } from 'react-redux';


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

const store = createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
