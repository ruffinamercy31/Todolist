import React, { useState } from "react";

interface DateFieldProps {
  id: string;
  readonly?: boolean;
  value?: any;
  name: string;
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DateField: React.FC<DateFieldProps> = ({
  id,
  readonly,
  value,
  HandleChange,
  name,
}) => {
  const [date, setDate] = useState<any>(new Date());
  const handleChange = (e: any) => {
    const { name, value, id } = e.target;

    setDate({ ...date, [name]: value });

    HandleChange(e);
  };
  return (
    <>
      <input
        readOnly={readonly ? readonly : false}
        type={"date"}
        className="form-control"
        onChange={(e: any) => handleChange(e)}
        value={value ? value : undefined}
        name={name}
        id={id}
      ></input>
    </>
  );
};
