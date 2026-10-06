import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Corrected URL

const api = axios.create({
  baseURL: BASE_URL,
});

async function fetchUserData(token) {
  try {
    const response = await api.get('/auth/user', { // Using 'api' instead of 'axios'
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to fetch user data');
    }
  } catch (error) {
    throw error;
  }
}

async function updateUser(token, data) {
  try {
    console.log('update ' + data)
    const response = await api.put('/auth/user', data, { // Using 'api' instead of 'axios'
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response)
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to update user data');
    }
  } catch (error) {
    throw error;
  }
}

export default {
  fetchUserData,
  updateUser
};
