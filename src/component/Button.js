const onClick = (targetedValue, action) => {
    if (action) {
      action(targetedValue);
    }
  };
  
export const Button = (props) => {
    const { targetedValue, label, action } = props;

    return (
        <button onClick={() => onClick(targetedValue, action)}>{label}</button>
    );
}
  