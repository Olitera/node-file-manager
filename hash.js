import fs from 'node:fs';
import crypto from 'node:crypto';
import { displayOperationFailedMes } from "./operation.js";
const hash = crypto.createHash('sha256')

export function calculateHash(path) {
  const readStream = fs.createReadStream(path, 'utf-8');
  readStream.pipe(hash)
  readStream.on('end', () => {
    hash.setEncoding('hex')
    console.log(hash.read())
  });
  readStream.on('error', () => displayOperationFailedMes())
}
