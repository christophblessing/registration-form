import React, { FormEvent, ChangeEvent } from "react";
import DetailsForm from "./DetailsForm";
interface Props {}

// TODO: refactor
interface DetailsProps {
  surname: string;
  birthName: string;
  firstName: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  maritalRelationShip: string;
  religion: string;
  currentNationalities: string;
  idCard: string;
  passPort: string;
}

interface State {
  dateOfMoving: string;
  details: DetailsProps;
}

class RegistrationForm extends React.Component {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  state: State = {
    dateOfMoving: "",
    details: {
      surname: "",
      birthName: "",
      firstName: "",
      gender: "",
      dateOfBirth: "",
      placeOfBirth: "",
      maritalRelationShip: "",
      religion: "",
      currentNationalities: "",
      idCard: "",
      passPort: "",
    },
  };

  handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ dateOfMoving: event?.target?.value });
  };

  handleSurnameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ details: { surname: event?.target?.value } });
  };

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>
            Date of moving
            <input
              type="date"
              value={this.state.dateOfMoving}
              onChange={this.handleDateChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Into the apartment in
            <input type="number" />
            in Hamburg
          </label>
        </div>
        <div className="form-group">
          <label>
            Street (or place ect.)
            <input />
          </label>
        </div>
        <div className="form-group">
          <label>
            House Number
            <input type="number" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Add-on (e.g. name of main tenant)
            <input />
          </label>
        </div>
        <div className="form-group">
          <label>
            Floor
            <input type="number" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Apartment Number
            <input type="number" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Name and Address of Landlord
            <input></input>
          </label>
        </div>
        <DetailsForm handleSurnameChange={this.handleSurnameChange} />

        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
}

export default RegistrationForm;
