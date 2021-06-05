import {useEffect, createContext, useState, useCallback} from 'react'
import { getAllToDo } from '../api/http';

export const ToDoContext = createContext({});

const ToDoProvider = (props) => {
    const [todos, setToDos] = useState([]);
    
    const refreshContext = useCallback(() => {
        console.log(" refresh context !!!");
    });

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

    }, [refreshContext]);

    return (
        <ToDoContext.Provider value={{...todos, refreshContext }}>
          {props.children}
         </ToDoContext.Provider>
      );
}

export default ToDoProvider;
