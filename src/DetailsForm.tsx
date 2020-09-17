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
          <label>
            Surname / Doctoral Degree
            <input onChange={this.props.handleSurnameChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Birth Name
            <input />
          </label>
        </div>

        <div className="form-group">
          <label>
            First Name(s)
            <input />
          </label>
        </div>

        <div className="form-group">
          <input
            type="radio"
            value="male"
            id="male"
            onChange={this.handleGenderChange}
            name="gender"
          />
          <label htmlFor="male">Male</label>
        </div>

        <div className="form-group">
          <input
            type="radio"
            value="female"
            id="female"
            onChange={this.handleGenderChange}
            name="gender"
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    );
  }
}

export default Details;
