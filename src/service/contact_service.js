import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchContacts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};
