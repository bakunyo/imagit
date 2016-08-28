export const SET_REPO = 'SET_REPO'

export function setRepo(path, repo, commits) {
  return {
    type: SET_REPO,
    path: path,
    repo: repo,
    commits: commits
  }
}
