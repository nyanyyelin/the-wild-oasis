const Input = ({
  type,
  placeholder,
  id,
  defaultValue,
  onBlur,
  disabled,
  onChange,
  autoComplete,
  value,
}) => {
  return (
    <input
      type={type}
      id={id}
      onBlur={onBlur}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={!placeholder ? '' : placeholder}
      onChange={onChange}
      autoComplete={autoComplete}
      value={value}
      className={`rounded-md border-1 px-2 py-2 text-base ${disabled ? 'bg-gray-400' : 'bg-white'}`}
    />
  );
};

export default Input;
