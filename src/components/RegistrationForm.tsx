import React, { FormEvent, ChangeEvent } from "react";
import DetailsForm from "./DetailsForm";
import { Details, State } from "../types/types";

class RegistrationForm extends React.Component {
  state: State = {
    dateOfMoving: "",
    postCode: 0,
    apartmentNumber: 0,
    street: "",
    houseNumber: "",
    addOn: "",
    floor: 0,
    landlord: "",
    familyMembers: [
      {
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
    ],
    previousAccommodationPostCode: 0,
    previousAccommodationAddress: "",
    signatureDate: "",
    signatureCity: "",
  };

  constructor(props: {}) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumberValue = this.handleChangeNumberValue.bind(this);
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  handleChangeNumberValue = (event: ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = Number.parseInt(event.target.value);
    this.setState({ [key]: value });
  };

  detailsChangeHandler = (value: Details, index: number) => {
    const familyMembers =  this.state.familyMembers;
    familyMembers[index] = value;
    this.setState(familyMembers);
  };

  initFamilyMembers = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    const familyMembers: Details[] = [];

    for (let i = 0; i < value; i++) {
      familyMembers.push(this.initMemberValues(i));
    }

    this.setState({ familyMembers: familyMembers });
  };

  initMemberValues = (index: number): Details => {
    const member = this.state.familyMembers[index];
    if (member) {
      return member;
    } else
      return {
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
      };
  };

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // TODO: remove console logging
    const debugMode = true;

    if (debugMode) {
      console.log(this.state);
    } else {
      // Source:
      // https://stackoverflow.com/questions/3665115
      const fakeDownloadButton = document.createElement("a");

      fakeDownloadButton.setAttribute(
        "href",
        "data:text/plain;charset=utf-8," +
          encodeURIComponent(JSON.stringify(this.state))
      );
      fakeDownloadButton.setAttribute("download", "form-data.json");
      fakeDownloadButton.style.display = "none";
      document.body.appendChild(fakeDownloadButton);

      fakeDownloadButton.click();

      document.body.removeChild(fakeDownloadButton);
    }
  }

  render() {
    const detailForms: any[] = [];

    Object.keys(this.state.familyMembers).forEach((member, index) => {
      const id = index.toString();
      detailForms.push(
        <DetailsForm
          id={index.toString()}
          key={"familyMember" + id}
          details={this.state.familyMembers[index]}
          handleChange={this.detailsChangeHandler}
        />
      );
    });

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="well">
            <div className="form-group">
              <label>Date of moving</label>
              <input
                type="date"
                name="dateOfMoving"
                value={this.state.dateOfMoving}
                className="form-control"
                onChange={this.handleChange}
                placeholder="yyyy-mm-dd"
              />
            </div>
            <div className="form-group">
              <label>Into the apartment in Hamburg</label>
              <input
                id="postCode"
                name="postCode"
                className="form-control"
                type="number"
                max={99999}
                value={this.state.postCode}
                onChange={this.handleChangeNumberValue}
              />
              <small>Post Code</small>
            </div>
            <div className="form-group">
              <label>Street</label>
              <input
                className="form-control"
                name="street"
                value={this.state.street}
                onChange={this.handleChange}
              />
              <small>(or place ect.)</small>
            </div>
            <div className="form-group">
              <label>House Number</label>
              <input
                type="number"
                className="form-control"
                name="houseNumber"
                value={this.state.houseNumber}
                onChange={this.handleChangeNumberValue}
              />
            </div>
            <div className="form-group">
              <label>Add-on</label>
              <input
                className="form-control"
                name="addOn"
                value={this.state.addOn}
                onChange={this.handleChange}
              />
              <small>(e.g. name of main tenant)</small>
            </div>
            <div className="form-group">
              <label>Floor</label>
              <input
                type="number"
                className="form-control"
                name="floor"
                value={this.state.floor}
                onChange={this.handleChangeNumberValue}
              />
            </div>
            <div className="form-group">
              <label>Apartment Number</label>
              <input
                type="number"
                className="form-control"
                name="apartmentNumber"
                value={this.state.apartmentNumber}
                onChange={this.handleChangeNumberValue}
              />
            </div>
          </div>

          <div className="form-group well">
            <label>Name and Address of Landlord</label>
            <input
              className="form-control"
              name="landlord"
              value={this.state.landlord}
              onChange={this.handleChange}
            />
          </div>

          {/* Begin Details Forms */}
          <div className="form-group">
            <h3>Family Members</h3>
            <label>Number of Family Members</label>
            <input
              className="form-control"
              type="number"
              min="1"
              value={Object.keys(this.state.familyMembers).length}
              onChange={this.initFamilyMembers}
            />
            <small>
              Please provide details for each family member living in the same
              domicile. These fields are identical.
            </small>
          </div>
          {detailForms}
          {/*End Details Forms */}

          <div className="well">
            <div className="form-group">
              <label>Previous accommodation</label>
              <input
                className="form-control"
                type="number"
                name="previousAccommodationPostCode"
                value={this.state.previousAccommodationPostCode}
                onChange={this.handleChangeNumberValue}
              />
              <small>Post Code</small>
              <input
                className="form-control"
                name="previousAccommodationAddress"
                value={this.state.previousAccommodationAddress}
                onChange={this.handleChange}
              />
              <small> Municipality / street / house number and add-on</small>
            </div>
            <small>
              Please complete the “supplementary sheet for the registration of
              several domiciles“, if you have not given up your last domicile or
              if further domiciles exist.
            </small>
          </div>
          <div className="well">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="signatureDate"
                value={this.state.signatureDate}
                className="form-control"
                onChange={this.handleChange}
                placeholder="yyyy-mm-dd"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                name="signatureCity"
                value={this.state.signatureCity}
                className="form-control"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Signature</label>
              <canvas className="form-control" style={{ height: "100px" }}>
                Please sign here
              </canvas>
            </div>
            <div className="form-group">
              <button type="submit" className="form-control btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
