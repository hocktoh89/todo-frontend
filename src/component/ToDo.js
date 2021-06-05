import React, { useState } from 'react';
import { insertToDo, deleteToDos } from '../api/http';
import Button from './Button';
import List from './List';

const NewToDo = () => {

    const [newItem, setNewItem] = useState('');

    const onAdd = async (value) => {
        await insertToDo(value);
        setNewItem('');
    };

    return <div>
        <input onChange={(e) => setNewItem(e.target.value)} value={newItem} />
        <Button label="Add" targetedValue={newItem} action={onAdd} />
    </div>
};

const DeleteAllButton = () => {

    const onDeleteAll = async () => {
        await deleteToDos();
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