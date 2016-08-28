import React from 'react'
import AppBar from 'material-ui/AppBar'

const Header = ({ value, handle }) => (
  <AppBar
    title={'Imagit' + value}
    onTitleTouchTap={handle}
  />
)

export default Header
