/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map((result) => {
      if (result.status === 'fulfilled') {
        return ({
          status: result.status,
          value: result.value,
        });
      }
      return ({
        status: result.status,
        value: result.reason,
      });
    }));
}
