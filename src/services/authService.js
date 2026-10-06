import userAPI from '../api/userAPI';

// Function to validate the token
export async function validateToken(token) {
    const response = await userAPI.fetchUserData(token)
    if (response) {
      return response
    }
    return false;
  }

  