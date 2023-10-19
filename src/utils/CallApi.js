import axios from 'axios';
import { BASE_URL } from './constants';

const config = {
    headers: {
        "Content-Type": "aplication/json",
        "Accept": "aplication/json",
    }
}

export const callAPI = async (resource) => {
    const { data } = await axios.get(`${BASE_URL}/${resource}`,config);
    return data;
}