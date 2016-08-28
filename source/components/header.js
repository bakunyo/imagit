import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

const Header = React.createClass({
  getInitialState() { return { open: false } },
  handleOpen() { this.setState({ open: true }) },
  handleClose() { this.setState({ open: false }) },
  handleSubmit() {
    const path = document.querySelector('#repoPath').value
    this.props.selectRepo(path)
    this.setState({ open: false })
  },

  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ]

    return (
      <div>
        <AppBar
          title={`Imagit - ${this.props.git.path}`}
          onLeftIconButtonTouchTap={this.handleOpen}
        />
        <Dialog
          title='Select Repository'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>input your git repogsitory to view diff of images.</p>
          <TextField
            id='repoPath'
            hintText='/path/to/your/git/repo'
            value={this.state.value}
          />
        </Dialog>
      </div>
    )
  }
})

export default Header
