import React, { useState } from 'react';
import Button from "./Button";
import { deleteToDo, editToDo } from '../api/http';

const Item = (props) => {
    const {item, id} = props;

    const [disabledInput, setDisabledInput] = useState(true);
    const [newItem, setNewItem] = useState(item);

    const onDelete = async (value) => {
        await deleteToDo(value);
    };
      
    const onEdit = async (id) => {
        if(!disabledInput) {
            await editToDo(id, newItem)
        }

        setDisabledInput(!disabledInput);
    };

    return (
        <>
        <input 
            onChange={(e) => setNewItem(e.target.value)} 
            value={newItem}
            disabled={disabledInput}
        />
        <Button label={disabledInput ? "Edit" : "Add"} targetedValue={id} action={onEdit} />
        <Button label="Delete" targetedValue={id} action={onDelete} />
        </>
    );
};

export default Item;