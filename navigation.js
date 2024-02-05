import { chdir } from 'node:process';
import { displayInvalidInputMes } from "./operation.js";

export function up() {
  try {
    chdir('../');
  } catch (err) {
    console.error(`chdir: ${ err }`);
  }
}

export function goToDir(path) {
  try {
    console.log(path)
    chdir(path);
  } catch (err) {
    displayInvalidInputMes()
  }
}

