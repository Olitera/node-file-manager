import fs from 'node:fs';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { displayOperationFailedMes } from "./operation.js";
import { join, basename } from "path";

export function readFile(path) {
  const readStream = createReadStream(path);
  readStream.pipe(process.stdout);
  readStream.on('end', () => console.log());
  readStream.on("error", ()=> displayOperationFailedMes())
}

export function createFile(path) {
  const writeStream = createWriteStream(path)
  writeStream.on("error", ()=> displayOperationFailedMes())
}

export function renameFile(path) {
  const arr = path.split(' ');
  const pathFile = arr[0];
  const newPath = arr[1]
    fs.rename(pathFile, newPath, (err) => {
      if (err) {
        displayOperationFailedMes()
      }
    })
}

export function copyFile(path) {
  const arr = path.split(' ');
  const pathFile = arr[0];
  const newPath = join(arr[1], basename(pathFile));
  const readStream = createReadStream(pathFile);
  const writeStream = createWriteStream(newPath);
  readStream.pipe(writeStream);
  readStream.on("error", ()=> displayOperationFailedMes())
  return { readStream, pathFile }
}

export function moveFile(path) {
  const {readStream, pathFile} =copyFile(path);
  readStream.on('end', () => {deleteFile(pathFile)})
}

export function deleteFile(path) {
    fs.unlink(path, (err) => {
      if (err) {
        displayOperationFailedMes()
      }
    })
}



