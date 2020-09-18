import React, { FormEvent, ChangeEvent } from "react";
import DetailsForm from "./DetailsForm";

interface Props {}

interface State {
  dateOfMoving: string;
  postCode: number;
  apartmentNumber: number;
  street: string;
  houseNumber: string;
  addOn: string;
  floor: number;
  landlord: string;
  details1: Details;
  details2?: Details;
  details3?: Details;
  details4?: Details;
}

interface Details {
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

class RegistrationForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  detailsChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    const detailId = event.target.id;
    this.setState({ [detailId]: { [key]: value } });
  };

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Date of moving</label>
            <input
              type="date"
              name="dateOfMoving"
              className="form-control"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Into the apartment in in Hamburg</label>
            <input
              name="postCode"
              className="form-control"
              type="number"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Street (or place ect.)</label>
            <input
              className="form-control"
              name="street"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>House Number</label>
            <input
              type="number"
              className="form-control"
              name="houseNumber"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Add-on (e.g. name of main tenant)</label>
            <input
              className="form-control"
              name="addOn"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Floor</label>
            <input
              type="number"
              className="form-control"
              name="floor"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Apartment Number</label>
            <input
              type="number"
              className="form-control"
              name="apartmentNumber"
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Name and Address of Landlord</label>
            <input className="form-control" onChange={this.changeHandler} />
          </div>

          <DetailsForm id="detail1" handleChange={this.detailsChangeHandler} />
          <DetailsForm id="detail2" handleChange={this.detailsChangeHandler} />
          <DetailsForm id="detail3" handleChange={this.detailsChangeHandler} />
          <DetailsForm id="detail4" handleChange={this.detailsChangeHandler} />

          <div className="form-group">
            <label>Previous accommodation Post Code</label>
            <input className="form-control" type="number"></input>
          </div>

          <div className="form-group">
            <label>Municipality / street / house number and add-on</label>
            <input className="form-control" />
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
