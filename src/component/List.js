import Item from "./Item";
import { useContext, useEffect, useState } from 'react';
import { ToDoContext } from "../context/todoContext";

const List = () => {

    const { data: { data: oriData} = {} } = useContext(ToDoContext);
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        setItems(oriData);
    }, [oriData]);

    if(!items) {
        return <></>;
    }

    return (
        items &&
        items.map(({ _id, text }) => (
        <ul key={_id}>
        <Item item={text} id={_id}/>
        </ul>
        ))
    );
}

export default List;