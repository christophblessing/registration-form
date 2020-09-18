import React, { ChangeEvent } from "react";

interface DetailsProps {
  handleSurnameChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

class Details extends React.Component<DetailsProps> {
  handleBirthNameChange() {}

  handleGenderChange() {}

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Surname / Doctoral Degree</label>
          <input
            className="form-control"
            onChange={this.props.handleSurnameChange}
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
            onChange={this.handleGenderChange}
            name="gender"
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            value="female"
            id="female"
            onChange={this.handleGenderChange}
            name="gender"
          />
        </div>
      </div>
    );
  }
}

export default Details;
