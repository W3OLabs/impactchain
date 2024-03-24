import CRC32 from "crc-32";

function updateChecksum(chunk: Uint8Array | ArrayBuffer, checksum: number): number {
  const moduloValue = 400000000;

  const chunkAsUint8Array = chunk instanceof ArrayBuffer ? new Uint8Array(chunk) : chunk;

  const signedChecksum = CRC32.buf(chunkAsUint8Array, 0);


  const unsignedChecksum = signedChecksum >>> 0;

  const updatedChecksum = (checksum + unsignedChecksum) % moduloValue;

  return updatedChecksum;
}



export { updateChecksum };