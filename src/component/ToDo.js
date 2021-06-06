import React, { useState, useContext } from 'react';
import { insertToDo, deleteToDos } from '../api/http';
import Button from './Button';
import List from './List';
import { ToDoContext } from "../context/todoContext";

const NewToDo = () => {

    const [newItem, setNewItem] = useState('');
    const { refreshContext , refreshCount} = useContext(ToDoContext);

    const onAdd = async (value) => {
        await insertToDo(value);

        setNewItem('');
        const newCount = refreshCount + 1;
        refreshContext(newCount);
    };

    return <div data-cy="newToDoBtn">
        <input onChange={(e) => setNewItem(e.target.value)} value={newItem} />
        <Button label="Add" targetedValue={newItem} action={onAdd} />
    </div>
};

const DeleteAllButton = () => {

    const { refreshContext, refreshCount } = useContext(ToDoContext);

    const onDeleteAll = async () => {
        await deleteToDos();

        const newCount = refreshCount + 1;
        refreshContext(newCount);
    };

    return <div data-cy="deleteToDosBtn">
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