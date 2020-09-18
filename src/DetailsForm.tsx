import React, { ChangeEvent } from "react";

interface Props {
  id: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Details extends React.Component<Props> {
  id: string;

  constructor(props: Props) {
    super(props);

    this.id = props.id;
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Surname / Doctoral Degree</label>
          <input
            className="form-control"
            name=""
            onChange={this.props.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Birth Name</label>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <label>First Name(s)</label>
          <input className="form-control" />
        </div>

        <div className="form-group">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            value="male"
            id="male"
            onChange={this.props.handleChange}
            name="gender"
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            value="female"
            id="female"
            onChange={this.props.handleChange}
            name="gender"
          />
        </div>
      </div>
    );
  }
}

export default Details;
