import React from 'react'
import Header from './Header'
import Main from './Main'

const Root = ({ selectRepo, git }) => (
  <section id='root'>
    <Header
      selectRepo={selectRepo}
      git={git} 
    />
    <Main git={git} />
  </section>
)

export default Root
