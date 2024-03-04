const CheckBox = ({
  name,
  onChange = () => {},
  labelText=""
}) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input type="checkbox" id={name} name={name} onChange={onChange} />
    </>
  )
}

export default CheckBox;