import React from 'react'
import Header from './header'
import Main from './main'

const Root = ({ value, handleClick }) => (
  <section id='root'>
    <Header value={value} handle={handleClick} />
    <Main />
  </section>
)

export default Root
