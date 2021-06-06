import {useEffect, createContext, useState, useRef } from 'react'
import { getAllToDo } from '../api/http';

export const ToDoContext = createContext({});

const ToDoProvider = (props) => {
    const counterRef = useRef(0);
    const [todos, setToDos] = useState([]);
    const [refreshCount, setRefreshCount] = useState(0);
    
    const refreshContext = (value) => {
        counterRef.current = value;
        setRefreshCount(value);

        console.log(" refresh context !!!");
    };

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

    }, [refreshCount]);

    return (
        <ToDoContext.Provider value={{...todos, refreshContext , refreshCount: counterRef.current}}>
          {props.children}
         </ToDoContext.Provider>
      );
}

export default ToDoProvider;
