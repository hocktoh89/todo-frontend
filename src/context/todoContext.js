import {useEffect, createContext, useState} from 'react'
import { getAllToDo } from '../api/http';

export const ToDoContext = createContext({});

const ToDoProvider = (props) => {
    const [todos, setToDos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const result = await getAllToDo();
                setToDos(result);
            } catch (err) {
                console.error("Error Fetching ToDo List from API ", err);
            }
        } 

        fetchTodos();

    }, []);

    return (
        <ToDoContext.Provider value={todos}>
          {props.children}
         </ToDoContext.Provider>
      );
}

export default ToDoProvider;
