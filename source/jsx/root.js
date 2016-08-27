import React, { Component } from 'react'
import Header from './header'
import Main from './main'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class Root extends Component {
  render() {
    return (
      <div id='root'>
        <Header />
        <Main />
        <MuiThemeProvider>
          <RaisedButton label="Default" />
        </MuiThemeProvider>
      </div>
    )
  }
}
