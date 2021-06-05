import Button from "./Button";

const onDelete = (value) => {
  console.log("   onDelete  is clicked ", value);
};

const onEdit = (value) => {
  console.log("   onEdit  is clicked ", value);
};

export const Item = (props) => {
    return (
        <>
        {item}
        <Button label="Edit" targetedValue={id} action={onEdit} />
        <Button label="Delete" targetedValue={id} action={onDelete} />
        </>
    );
};