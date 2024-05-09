interface LabelFieldProps {
  label: string;
  id: string;
}

export const LabelField: React.FC<LabelFieldProps> = ({ label, id }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
    </>
  );
};
