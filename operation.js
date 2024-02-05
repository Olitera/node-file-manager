import { cwd, chdir } from 'node:process';
import os from 'node:os'

export function displayCurDir() {
  console.log(`You are currently in ${cwd()}`);
}

try {
  chdir(os.homedir());
  displayCurDir();
} catch (err) {
  console.error(`chdir: ${err}`);
}

export function displayInvalidInputMes() {
  console.log('Invalid input');
}

function displayOperationFailedMes() {
  console.log('Operation failed');
}



