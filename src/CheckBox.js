const CheckBox = ({
  name,
  onChange = () => {},
  labelText="",
  checked=false
}) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={onChange}
        defaultChecked={checked} />
        <label htmlFor={name}><span>{labelText}</span></label>
    </>
  )
}

export default CheckBox;