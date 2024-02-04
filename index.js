import process from 'node:process';

let username = process.argv.find(
  (el) => el.split('=')[0] === '--username'
)?.split('=')[1];

console.log('Welcome to the File Manager, ' + username + '!')
