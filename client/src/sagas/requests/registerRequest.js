import axios from 'axios';

export async function* registerRequestSaga({ user }) {
  try {
    console.log(user);
    await axios.post('http://localhost:5000/user/register', user);
  } catch (error) {
    console.warn(error);
  }
}
