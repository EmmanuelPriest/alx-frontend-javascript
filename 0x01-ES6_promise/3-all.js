import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${userResponse.body.firstName} ${userResponse.body.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}

module.exports = handleProfileSignup;
