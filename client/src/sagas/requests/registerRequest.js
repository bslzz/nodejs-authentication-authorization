import axios from 'axios';

export function* registerRequestSaga() {
  try {
    axios.post('http://localhost:5000/user/register');
  } catch (error) {
    console.warn(error);
  }
}
