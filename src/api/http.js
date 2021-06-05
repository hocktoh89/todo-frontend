import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'

export const insertToDo = async (data) => {
    try {
      const response = await axios.post('/todos', {
        text: data
      });
        
      return response;
    } catch (error) {
      console.error(error);
    }
}

export const getAllToDo = async () => {
    try {
      const response = await axios.get('/todos');
      return response;
    } catch (error) {
      console.error(error);
    }
}