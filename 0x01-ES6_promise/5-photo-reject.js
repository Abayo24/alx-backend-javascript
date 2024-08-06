/* eslint-disable linebreak-style */
export default function uploadPhoto(fileName) {
  return Promise.reject(
    new Error(`${fileName} cannot be processed`),
  );
}
