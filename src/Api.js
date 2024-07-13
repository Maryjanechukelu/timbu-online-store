import axios from 'axios';

const API_KEY = "01a261506aa2480ca207f7f1eed3732220240713073416787076"  

const api = axios.create({
  baseURL: 'https://app.timbu.cloud/', 
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};


