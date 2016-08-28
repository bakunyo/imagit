import React from 'react'
import Header from './Header'
import Main from './Main'

const Root = ({ value, handleClick }) => (
  <section id='root'>
    <Header value={value} handle={handleClick} />
    <Main />
  </section>
)

export default Root
