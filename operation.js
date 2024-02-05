import { cwd, chdir } from 'node:process';
import os from 'node:os'

function displayCurDir() {
  console.log(`You are currently in ${cwd()}`);
}

try {
  chdir(os.homedir());
  displayCurDir();
} catch (err) {
  console.error(`chdir: ${err}`);
}





