import { connect } from 'react-redux';
import App from '../components/root'
import { increment } from '../actions'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(increment()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
