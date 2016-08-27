import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'

export default class CommitList extends Component {
  render () {
    return (
      <div id='commit_list'>
        <List>
          <ListItem primaryText='commit name' ></ListItem>
          <ListItem primaryText='commit name' ></ListItem>
          <ListItem primaryText='commit name' ></ListItem>
        </List>
      </div>
    )
  }
}
