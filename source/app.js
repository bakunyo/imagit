import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';

// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Root from './containers/App'
import store from './store'
import './sass/style'

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#root')
)
