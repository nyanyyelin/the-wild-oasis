const FormRow = ({ label, error, children }) => {
  return (
    <div className="grid grid-cols-[18rem_1.3fr_1.5fr] items-center gap-3 px-4 py-3">
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span className="text-base text-red-500">{error}</span>}
    </div>
  );
};

export default FormRow;
