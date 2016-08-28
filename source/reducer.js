import { setRepo, SET_REPO } from './actions'
import Git from './git'

const initialState = {
  git: {
    path: '',
    repo: null
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_REPO:
      const git = new Git(action.path)
      git.log()
      return Object.assign({}, state,
        { git: { path: action.path } }
      )
    default:
      return state
  }
}
