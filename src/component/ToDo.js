import React, { useState, useContext } from 'react';
import { insertToDo, deleteToDos } from '../api/http';
import Button from './Button';
import List from './List';
import { ToDoContext } from "../context/todoContext";

const NewToDo = () => {

    const [newItem, setNewItem] = useState('');
    const { refreshContext } = useContext(ToDoContext);

    const onAdd = async (value) => {
        await insertToDo(value);
        setNewItem('');
        refreshContext();
    };

    return <div>
        <input onChange={(e) => setNewItem(e.target.value)} value={newItem} />
        <Button label="Add" targetedValue={newItem} action={onAdd} />
    </div>
};

const DeleteAllButton = () => {

    const { refreshContext } = useContext(ToDoContext);

    const onDeleteAll = async () => {
        await deleteToDos();
        refreshContext();
    };

    return <div>
        <Button label="Delete All" action={onDeleteAll} />
    </div>
};

const ToDo = () => {

    return <> 
        <h1>To Do List</h1>
        <NewToDo />
        <div>
            <List/>
            <DeleteAllButton/>
        </div>
    </>
};

export default ToDo;