const Input = ({
  type,
  name,
  onChange = () => {},
  labelText="",
  step=null
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input step={step} type={type} id={name} name={name} onChange={onChange} />
    </>
  )
}

export default Input;