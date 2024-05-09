interface NumberFieldProps {
  id: string;
  readonly?: boolean;
  name: string;
  value?: any;
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NumberField: React.FC<NumberFieldProps> = ({
  id,
  readonly,
  value,
  HandleChange,
  name,
}) => {
  return (
    <>
      <input
        readOnly={readonly ? readonly : false}
        type={"number"}
        className="form-control"
        onChange={(e) => HandleChange(e)}
        value={value ? value : undefined}
        name={name}
        id={id}
      ></input>
    </>
  );
};
