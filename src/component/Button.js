const onClick = (targetedValue, action) => {
    if (action) {
      action(targetedValue);
    }
  };
  
const Button = (props) => {
    const { targetedValue, label, action, dataCy } = props;

    return (
        <button data-cy={dataCy} onClick={() => onClick(targetedValue, action)}>{label}</button>
    );
}

export default Button;