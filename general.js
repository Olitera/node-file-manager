import process from 'node:process';
import { goToDir, up } from "./navigation.js";
import { displayCurDir } from "./operation.js";

let username = process.argv.find((el) => el.split('=')[0] === '--username')?.split('=')[1];

console.log('Welcome to the File Manager, ' + username + '!')

process.on('exit', () => process.stdout.write('\nThank you for using File Manager, ' + username + ', goodbye!\n'));
process.on('SIGINT', () => process.exit());
process.stdin.on('data', (chunk) => {
  if (chunk.toString().slice(0,-1) === '.exit') {
    process.exit();
  }
  if (chunk.toString().slice(0,-1) === 'up') {
    up()
  }
  if (chunk.toString().slice(0,-1).match(/cd .*/)) {
    goToDir(chunk.toString().slice(3,-1))
  }
  displayCurDir();
})
