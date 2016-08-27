import React, { Component } from 'react'
import CommitList from './commit_list'
import ImageViewer from './image_viewer'

export default class Main extends Component {
  render () {
    return (
      <section id='main'>
        <CommitList />
        <ImageViewer />
      </section>
    )
  }
}
