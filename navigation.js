import fs from 'node:fs/promises';
import fss from 'node:fs';
import { chdir, cwd } from 'node:process';
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

export function displayList() {
  fss.readdir(cwd(), async (err, files) => {
    let arr = [];
    for (let i = 0; i < files.length; i++) {
      const stats = await fs.stat(cwd() + '/' + files[i]);
      if (stats.isFile()) {
        arr.push({ Name: files[i], Type: 'file' })
      } else {
        arr.push({ Name: files[i], Type: 'directory' })
      }
    }
    console.table(
      arr.sort((a, b) => {
        if (a.Type === 'directory' && b.Type === 'file') return -1;
        if (b.Type === 'directory' && a.Type === 'file') return 1;
        if (a.Name.toUpperCase() > b.Name.toUpperCase()) return 1;
        if (a.Name.toUpperCase() < b.Name.toUpperCase()) return -1;
        return 0;
      })
    )
  })
}

