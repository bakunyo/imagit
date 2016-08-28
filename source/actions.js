export const SET_REPO = 'SET_REPO'

export function setRepo(path) {
  return {
    type: SET_REPO,
    path: path
  }
}
