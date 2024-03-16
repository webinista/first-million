const Input = ({
  type,
  name,
  onChange = () => {},
  onBlur = () => {},
  defaultValue=null,
  value=null,
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
        onBlur={onBlur}
        size={size}
        value={value || ''} />
    </>
  )
}

export default Input;