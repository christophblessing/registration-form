import React, { ChangeEvent } from "react";

interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  label: string;
  value: string | number;
}

function FormField(props: Props) {
  const id = props.name + Math.random() * 100;
  return (
    <div className="form-group">
      <label htmlFor={id}>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default FormField;
