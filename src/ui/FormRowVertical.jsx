const FormRowVertical = ({ label, error, children }) => {
  return (
    <div className="mb-5 flex flex-col gap-2 px-4 py-0">
      {label && (
        <label htmlFor={children.props.id} className="font-semibold">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-xl text-red-700">{error}</span>}
    </div>
  );
};

export default FormRowVertical;
