export default function createInt8TypedArray(length, position, value) {
  const int8Array = new Int8Array(length);

  if (position < 0 || index >= int8Array.length) {
    throw new Error('Position outside range');
  }

  int8Array[position] = value;

  const arrayBuffer = int8Array.buffer;

  return arrayBuffer;
}