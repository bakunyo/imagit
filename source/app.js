import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Root from './jsx/root'
import './sass/style'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
)
