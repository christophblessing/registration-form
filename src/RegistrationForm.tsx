import React, { FormEvent, ChangeEvent } from "react";
import DetailsForm from "./DetailsForm";
import { State } from "./types/types";

interface Props {}

class RegistrationForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  state: State = {
    dateOfMoving: "",
    postCode: 0,
    apartmentNumber: 0,
    street: "",
    houseNumber: "",
    addOn: "",
    floor: 0,
    landlord: "",
    details1: {
      surname: "",
      birthName: "",
      firstName: "",
      gender: "",
      dateOfBirth: "",
      placeOfBirth: "",
      maritalRelationship: "",
      religion: "",
      currentNationalities: "",
      idCard: "",
      passport: "",
    },
    previousAccommodation: {
      postCode: 0,
      address: "",
    },
  };

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
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="well">
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
                max={99999}
                onChange={this.changeHandler}
              />
              <small>Post Code</small>
            </div>
            <div className="form-group">
              <label>Street</label>
              <input
                className="form-control"
                name="street"
                onChange={this.changeHandler}
              />
              <small>(or place ect.)</small>
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
              <label>Add-on</label>
              <input
                className="form-control"
                name="addOn"
                onChange={this.changeHandler}
              />
              <small>(e.g. name of main tenant)</small>
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
          </div>

          <div className="form-group well">
            <label>Name and Address of Landlord</label>
            <input className="form-control" onChange={this.changeHandler} />
          </div>

          <DetailsForm id="detail1" handleChange={this.detailsChangeHandler} />
          {/* <DetailsForm id="detail2" handleChange={this.detailsChangeHandler} /> */}
          {/* <DetailsForm id="detail3" handleChange={this.detailsChangeHandler} /> */}
          {/* <DetailsForm id="detail4" handleChange={this.detailsChangeHandler} /> */}

          <div className="well">
            <div className="form-group">
              <label>Previous accommodation</label>
              <input className="form-control" type="number"></input>
              Post Code
              <input className="form-control" />
              Municipality / street / house number and add-on
            </div>
            <small>
              Please complete the “supplementary sheet for the registration of
              several domiciles“, if you have not given up your last domicile or
              if further domiciles exist.
            </small>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
