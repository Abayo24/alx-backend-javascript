/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from '../utils.js';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.allSettled([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
