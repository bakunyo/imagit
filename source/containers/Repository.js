import { connect } from 'react-redux';
import { setRepo } from '../actions'
import Root from '../components/root'
import Git from '../git'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    selectRepo: (path) => {
      const git = new Git(path)
      let list = []
      git.repo.log((err, logs) => {
        if (err !== null) { return }
        list = logs.all.slice(0, 10)
      }).then(() => {
        dispatch(setRepo(
          git.repo._baseDir,
          git,
          list
        ))
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
