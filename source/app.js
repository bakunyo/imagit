import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Root from './jsx/root'
import './sass/style'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>,
  document.getElementById('root')
)
