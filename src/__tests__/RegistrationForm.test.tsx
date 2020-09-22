import React from "react";
import { shallow } from "enzyme";
import RegistrationForm from "../components/RegistrationForm";
import { DetailsForm } from "../components/DetailsForm";

it("Writes input to state", () => {
  const form = shallow(<RegistrationForm />);
  const testField = "postCode";
  const testValue = 1234;

  const event = {
    target: { name: testField, value: testValue },
  };

  form.find("#" + testField).simulate("change", event);
  expect(form.state(testField)).toEqual(testValue);
});

it("Renders one DetailsForm in default state", () => {
  const form = shallow(<RegistrationForm />);

  expect(form.find(DetailsForm).length).toEqual(1);
});

it("Renders more DetailsForms based on state", () => {
  const form = shallow(<RegistrationForm />);
  form.setState({
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
  });

  expect(form.find(DetailsForm).length).toEqual(2);
});
