import React, { FormEvent, ChangeEvent } from "react";
import DetailsForm from "./DetailsForm";
import { Details, State } from "../types/types";
import FormField from "./FormField";

class RegistrationForm extends React.Component {
  state: State = {
    dateOfMoving: "",
    postCode: 0,
    apartmentNumber: 0,
    street: "",
    houseNumber: 0,
    addOn: "",
    floor: 0,
    landlord: "",
    familyMembers: [null],
    previousAccommodationPostCode: 0,
    previousAccommodationAddress: "",
    signatureDate: "",
    signatureCity: "",
  };

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
    const familyMembers = this.state.familyMembers;
    familyMembers[index] = value;
    this.setState({ familyMembers: familyMembers });
  };

  initFamilyMembers = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    let familyMembers = this.state.familyMembers;

    if (value > familyMembers.length) {
      familyMembers.push(null);
    } else if (value < familyMembers.length) {
      familyMembers.pop();
    }

    this.setState({ familyMembers: familyMembers });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
  };

  render() {
    const detailForms: any[] = [];

    this.state.familyMembers.forEach((member, index) => {
      detailForms.push(
        <DetailsForm
          id={index}
          key={"familyMember" + index}
          details={member}
          handleChange={this.detailsChangeHandler}
        />
      );
    });

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="well">
            <FormField
              id="dateOfMoving"
              type="date"
              name="dateOfMoving"
              value={this.state.dateOfMoving}
              onChange={this.handleChange}
              label="Date of moving"
            ></FormField>

            <FormField
              id="postCode"
              type="number"
              name="postCode"
              label="Into the apartment in Hamburg"
              description="Post Code"
              value={this.state.postCode}
              onChange={this.handleChangeNumberValue}
            ></FormField>

            <FormField
              id="street"
              type="text"
              name="street"
              label="Street"
              description="(or place ect.)"
              value={this.state.street}
              onChange={this.handleChange}
            ></FormField>

            <FormField
              label="House Number"
              id="houseNumber"
              type="number"
              name="houseNumber"
              value={this.state.houseNumber}
              onChange={this.handleChangeNumberValue}
            ></FormField>

            <FormField
              id="addOn"
              label="Add-on"
              type="text"
              name="addOn"
              value={this.state.addOn}
              onChange={this.handleChange}
              description="e.g. name of main tenant"
            ></FormField>

            <FormField
              id="floor"
              label="Floor"
              type="number"
              name="floor"
              value={this.state.floor}
              onChange={this.handleChangeNumberValue}
            ></FormField>

            <FormField
              label="Apartment Number"
              id="apartmentNumber"
              type="number"
              name="apartmentNumber"
              value={this.state.apartmentNumber}
              onChange={this.handleChangeNumberValue}
            ></FormField>
          </div>

          <FormField
            label="Name and Address of Landlord"
            id="landlord"
            name="landlord"
            type="text"
            value={this.state.landlord}
            onChange={this.handleChange}
          ></FormField>

          {/* Begin Details Forms */}
          <div className="form-group">
            <h3>Family Members</h3>
            <label>Number of Family Members</label>
            <input
              className="form-control"
              type="number"
              min="1"
              value={this.state.familyMembers.length}
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
            <FormField
              label="Date"
              id="signatureDate"
              type="date"
              name="signatureDate"
              value={this.state.signatureDate}
              onChange={this.handleChange}
              placeholder="yyyy-mm-dd"
            ></FormField>

            <FormField
              label="City"
              id="signatureCity"
              name="signatureCity"
              type="text"
              value={this.state.signatureCity}
              onChange={this.handleChange}
            ></FormField>

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
