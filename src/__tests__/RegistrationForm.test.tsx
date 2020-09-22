import React from "react";
import { shallow } from "enzyme";
import RegistrationForm from "../components/RegistrationForm";

it("Writes input to state", () => {
  const form = shallow(<RegistrationForm />);
  const testField = "postCode"
  const testValue = 1234;

  const event = {
    target: { name: testField, value: testValue },
  };

  form.find("#" + testField).simulate("change", event);
  expect(form.state(testField)).toEqual(testValue);

});
