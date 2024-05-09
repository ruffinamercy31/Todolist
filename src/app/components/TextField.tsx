import React from "react";

interface TextFieldProps {
  id: string;
  readonly?: boolean;
  name: string;
  value?: any;
  error?: string;
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  readonly,
  name,
  value,
  error,
  HandleChange,
}) => {
  return (
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      readOnly={readonly}
      onChange={HandleChange}
      className="form-control"
    />
  );
};

export default TextField;
