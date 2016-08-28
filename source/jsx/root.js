import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './header'
import Main from './main'

const App = ({ value, handleClick }) => (
  <MuiThemeProvider>
    <section id='root'>
      <Header value={value} handle={handleClick} />
      <Main />
    </section>
  </MuiThemeProvider>
)

export default App
