import { connect } from 'react-redux';
import { increment } from '../actions'
import Root from '../components/root'

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
)(Root)
