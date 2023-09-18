import axios from 'axios';

const BASE_URL = 'https://your-api-base-url.com'; // Replace with your API base URL

// Function to make a GET request
export const getApiData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/endpoint`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Function to make a POST request
export const postApiData = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/endpoint`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
