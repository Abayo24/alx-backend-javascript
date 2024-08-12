export default function createInt8TypedArray() {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }
  return view.setInt8(position, value);
}
