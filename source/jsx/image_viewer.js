import React, { Component } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'

export default class ImageViewer extends Component {
  render () {
    return (
      <div id='image_viewer'>
        <Tabs>
          <Tab label='Before'>
          </Tab>
          <Tab label='After'>
          </Tab>
          <Tab label='Diff'>
          </Tab>
        </Tabs>
      </div> 
    )
  }
}
