import React, { useState, useContext } from 'react';
import Button from "./Button";
import { deleteToDo, editToDo } from '../api/http';
import { ToDoContext } from "../context/todoContext";

const Item = (props) => {
    const {item, id} = props;

    const [disabledInput, setDisabledInput] = useState(true);
    const [newItem, setNewItem] = useState(item);
    const { refreshContext, refreshCount } = useContext(ToDoContext);

    const onDelete = async (value) => {
        await deleteToDo(value);

        const newCount = refreshCount + 1;
        refreshContext(newCount);
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
        <Button label={ disabledInput ? "Edit" : "Update" } targetedValue={id} action={onEdit} />
        <Button label="Delete" targetedValue={id} action={onDelete} />
        </>
    );
};

export default Item;