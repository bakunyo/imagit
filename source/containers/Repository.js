import { connect } from 'react-redux';
import { setRepo } from '../actions'
import Root from '../components/root'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    selectRepo: (path) => {
      dispatch(setRepo(path))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
