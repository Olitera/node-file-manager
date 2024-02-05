import os from 'node:os'

export function getEOL() {
  console.log(os.EOL)
}

export function getCpus() {
  console.log(os.cpus())
}

export function getHomeDir() {
  console.log(os.homedir())
}

export function getUserName() {
  console.log(os.userInfo().username)
}

export function getArchitecture() {
  console.log(os.arch())
}
