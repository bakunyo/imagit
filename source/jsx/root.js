import React, { Component } from 'react'
import Header from './header'
import Main from './main'

export default class Root extends Component {
  render() {
    return (
      <section id='root'>
        <Header />
        <Main />
      </section>
    )
  }
}
