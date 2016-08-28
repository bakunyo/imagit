import React from 'react'
import CommitList from './CommitList'
import ImageViewer from './ImageViewer'

const Main = ({ git }) => (
  <section id='main'>
    <CommitList git={git} />
    <ImageViewer />
  </section>
)

export default Main
