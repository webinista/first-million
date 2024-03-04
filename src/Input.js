const Input = ({
  type,
  name,
  onChange = () => {},
  defaultValue="",
  labelText="",
  step=null,
  size=25
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        step={step}
        type={type}
        id={name}
        name={name}
        onChange={onChange}
        size={size}
        defaultValue={defaultValue} />
    </>
  )
}

export default Input;