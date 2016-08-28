import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'

const CommitList = () => (
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

export default CommitList
