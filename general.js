import process from 'node:process';
import { displayList, goToDir, up } from "./navigation.js";
import { displayCurDir } from "./operation.js";
import { createFile, readFile, renameFile, deleteFile, copyFile, moveFile } from "./basic.js";

let username = process.argv.find((el) => el.split('=')[0] === '--username')?.split('=')[1];

console.log('Welcome to the File Manager, ' + username + '!')

process.on('exit', () => process.stdout.write('\nThank you for using File Manager, ' + username + ', goodbye!\n'));
process.on('SIGINT', () => process.exit());
process.stdin.on('data', (chunk) => {
  if (chunk.toString().slice(0,-1) === '.exit') {
    process.exit();
  }
  if (chunk.toString().slice(0,-1) === 'up') {
    up();
  }
  if (chunk.toString().slice(0,-1).match(/cd .*/)) {
    goToDir(chunk.toString().slice(3,-1));
  }
  if (chunk.toString().slice(0,-1) === 'ls') {
    displayList();
  }
  if (chunk.toString().slice(0,-1).match(/cat .*/)) {
    readFile(chunk.toString().slice(4,-1));
  }
  if (chunk.toString().slice(0,-1).match(/add .*/)) {
    createFile(chunk.toString().slice(4,-1));
  }
  if (chunk.toString().slice(0,-1).match(/rn .*/)) {
    renameFile(chunk.toString().slice(3,-1));
  }
  if (chunk.toString().slice(0,-1).match(/cp .*/)) {
    copyFile(chunk.toString().slice(3,-1));
  }
  if (chunk.toString().slice(0,-1).match(/mv .*/)) {
    moveFile(chunk.toString().slice(3,-1));
  }
  if (chunk.toString().slice(0,-1).match(/rm .*/)) {
    deleteFile(chunk.toString().slice(3,-1))
  }

  displayCurDir();
})
