import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000'

export const insertToDo = async (data) => {
    try {
      const response = await axios.post('/todos', {
        text: data
      });
    //   console.log(response);
        return response;
    } catch (error) {
      console.error(error);
    }
}
