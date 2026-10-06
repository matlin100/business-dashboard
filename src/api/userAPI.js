import axios from 'axios';

const baseUrl = 'http://localhost:3000/auth';


async function fetchUserData(token) {
  
  try {
    const response = await axios.get(`${baseUrl}/user`, {
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
    const response = await axios.put(`${baseUrl}/user`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Failed to update user data');
    }
  } catch (error) {
    throw error;
  }
}

async function getUser(token) {
  try {
    const response = await axios.get(`${baseUrl}/user/detales`, {
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


export default {
  fetchUserData,
  updateUser,
  getUser
};