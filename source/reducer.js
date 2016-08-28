import { setRepo, SET_REPO } from './actions'
import Git from './git'

const initialState = {
  git: {
    path: '',
    repo: null,
    commits: []
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_REPO:
      return Object.assign({}, state,
        { git: { path: action.path, repo: action.repo, commits: action.commits } }
      )
    default:
      return state
  }
}
