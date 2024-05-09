interface Option {
  id: number;
  value: string;
  hidden?: boolean;
}

interface SelectFieldProps {
  id: string;
  readonly?: boolean;
  name: string;
  value?: any;
  options?: Option[];
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SelectFieldProps: React.FC<SelectFieldProps> = ({
  id,
  name,
  readonly,
  value,
  options,
  HandleChange,
}) => {
  return (
    <>
      <select
        className="form-select"
        id={id}
        name={name}
        onChange={(e: any) => HandleChange(e)}
      >
        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            hidden={option?.hidden}
          >
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};
