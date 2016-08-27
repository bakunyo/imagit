import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

import Git from 'simple-git'

function selectRepository() {
  let path = '/Users/bakunyo/workspace/imagit'
  let repo = Git(path)
  repo.log(function(i, commits) {
    commits.all.slice(0, 10).map((commit) => {
      console.log(commit.message);
    });
  });
}

const Header = () => (
  <AppBar
    title='Imagit'
    onLeftIconButtonTouchTap={selectRepository}
  />
)

export default Header
