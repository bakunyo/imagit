import SimpleGit from 'simple-git'

export default class Git {
  constructor(path) {
    this.path = path
    this.repo = SimpleGit(path)
  }

  log() {
    this.repo.log((err, logs) => {
      logs.all.forEach((log) => {
        console.log(log.message)
      })
    })
  }
}
