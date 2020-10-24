import React, { ChangeEvent } from "react";

export interface Props {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  type: string;
  name: string;
  label: string;
  description?: string;
  placeholder?: string;
  value: string | number;
}

function FormField(props: Props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.description && <small>{props.description}</small>}
    </div>
  );
}

export default FormField;
