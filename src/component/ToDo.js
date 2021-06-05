import React, { useState } from 'react';
import { insertToDo } from '../api/http';
import Button from './Button';

const NewToDo = () => {

    const [newItem, setNewItem] = useState('');

    const onAdd = async (value) => {
        await insertToDo(value);
        console.log("   onAdd  is clicked ", value);
      };

    return <div>
        <input onChange={(e) => setNewItem(e.target.value)}/>
        <Button label="Add" targetedValue={newItem} action={onAdd} />
    </div>
};

const ToDo = () => {

    return <> 
        <h1>To Do List</h1>
        <NewToDo />
    </>
};

export default ToDo;