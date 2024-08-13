export default function createInt8TypedArray(length, position, values) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position < 0 || position > length) {
    throw new Error('Position outside range');
  }
  view.setInt8();
  return view;
}
