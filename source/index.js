import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Root extends Component {
  render() {
    return (
      <div>imagit from react</div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
