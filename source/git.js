import SimpleGit from 'simple-git'

export default class Git {
  constructor(path) {
    this.path = path
    this.repo = SimpleGit(path)
  }

  commits() {
    return this.repo.log().then((err, logs) => {
      if (err !== null) { return [] }
      return logs.all.slice(0, 10)
    })
  }
}
