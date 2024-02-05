import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';
import { displayOperationFailedMes } from "./operation.js";

export async function compress(path) {
  const arr = path.split(' ');
  const pathFile = arr[0];
  const pathDest = arr[1];
  try {
    await pipeline(
      fs.createReadStream(pathFile),
      zlib.createBrotliCompress(),
      fs.createWriteStream(pathDest)
    )
  } catch (err) {
    displayOperationFailedMes()
  }
}

export async function decompress(path) {
  try {
    const arr = path.split(' ');
    const pathFile = arr[0];
    const pathDest = arr[1];
    await pipeline(
      fs.createReadStream(pathFile),
      zlib.createBrotliDecompress(),
      fs.createWriteStream(pathDest)
    )
  } catch (err) {
    displayOperationFailedMes()
  }
}
