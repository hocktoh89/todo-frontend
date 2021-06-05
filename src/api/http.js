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

export const deleteToDo = async (id) => {
  try {
    const response = await axios.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const editToDo = async (id, data) => {
  try {
    const response = await axios.put(`/todos/${id}`,{
      text: data
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const deleteToDos = async () => {
  try {
    const response = await axios.delete(`delete_all/todos/`);
    return response;
  } catch (error) {
    console.error(error);
  }
}