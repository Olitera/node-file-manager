import process from 'node:process';

let username = process.argv.find((el) => el.split('=')[0] === '--username')?.split('=')[1];

console.log('Welcome to the File Manager, ' + username + '!')

process.on('exit', () => process.stdout.write('\nThank you for using File Manager, ' + username + ', goodbye!\n'));
process.on('SIGINT', () => process.exit());
process.stdin.on('data', (chunk) => {
  if (chunk.toString().slice(0,-1) === '.exit') {
    process.exit()
  }
})
