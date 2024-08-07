/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from '../utils.js';

export default function handleProfileSignup(status, body, firstName, lastName) {
  return (
    Promise.all([uploadPhoto(status, body), createUser(firstName, lastName)])
      .then((results) => {
        const [photo, user] = results;
        console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
      })
      .catch(() => {
        console.log('Signup system offline');
      })
  );
}
