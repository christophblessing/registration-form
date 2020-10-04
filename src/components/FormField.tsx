import React, { ChangeEvent } from "react";

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  label: string;
  value: string | number;
}

export class FormField extends React.Component<Props> {
  name: string;
  type: string;
  label: string;
  value: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  id: string;

  constructor(props: Props) {
    super(props);
    this.name = props.name;
    this.type = props.type;
    this.label = props.label;
    this.value = props.value;
    this.id = this.name + Math.random() * 100;
    this.handleChange = props.handleChange;
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.id}>{this.label}</label>
        <input
          className="form-control"
          type={this.type}
          name={this.name}
          id={this.id}
          value={this.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FormField;
