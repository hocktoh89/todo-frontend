import React, { useState } from 'react';
import Button from "./Button";
import { deleteToDo } from '../api/http';

const Item = (props) => {
    const {item, id} = props;

    const [disabledInput, setDisabledInput] = useState(true);
    const [newItem, setNewItem] = useState(item);

    const onDelete = async (value) => {
        await deleteToDo(value);
        console.log("   onDelete  is clicked ", value);
    };
      
    const onEdit = (value) => {
        console.log("   onEdit  is clicked ", value);
        setDisabledInput(false);
    };

    return (
        <>
        <input 
            onChange={(e) => setNewItem(e.target.value)} 
            value={newItem}
            disabled={disabledInput}
        />
        <Button label="Edit" targetedValue={id} action={onEdit} />
        <Button label="Delete" targetedValue={id} action={onDelete} />
        </>
    );
};

export default Item;