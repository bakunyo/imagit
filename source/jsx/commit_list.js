import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

export default class CommitList extends Component {
  render () {
    return (
      <div id='commit_list'>
        <List>
          <Subheader>
            <h2>Commit List</h2>
          </Subheader>
          <ListItem
            primaryText='commit message'
            secondaryText='committer name & commit date'
          />
          <ListItem
            primaryText='commit message'
            secondaryText='committer name & commit date'
          />
          <ListItem
            primaryText='commit message'
            secondaryText='committer name & commit date'
          />
        </List>
      </div>
    )
  }
}
