function Input({
  label,
  name,
  type,
  placeholder,
  rows,
  resize,
  req,
  value,
  setValue,
}) {
  if (type === "textarea") {
    return (
      <label htmlFor={name}>
        {label}:
        <textarea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          id={name}
          style={resize ? "" : { resize: "none" }}
          rows={rows ? rows : 3}
          placeholder={placeholder ? placeholder : ""}
        />
      </label>
    );
  }
  return (
    <label htmlFor={name}>
      {label}:
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        id={name}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
      />
    </label>
  );
}

export default Input;
