const CheckBox = ({
  name,
  onChange = () => {},
  labelText="",
  checked=false
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        defaultChecked={checked} />
    </>
  )
}

export default CheckBox;