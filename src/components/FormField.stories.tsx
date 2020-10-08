import React, { ChangeEvent } from "react";
import FormField, { Props } from "./FormField";
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
  title: "FormField",
  component: FormField,
} as Meta;

let state: any = {};

const mockOnChange = (event: ChangeEvent<HTMLInputElement>) => {
  const key = event.target.name;
  const value = event.target.value;
  state[key] = value;
};

const Template = (args: any) => <FormField {...args}></FormField>;

export const Text: Story<Props> = Template.bind({});
Text.args = {
  id: "text",
  type: "text",
  name: "text",
  label: "Text Input",
  value: state.text,
  onChange: mockOnChange,
  description: "I am a description Text",
};

export const Number: Story<Props> = Template.bind({});
Number.args = {
  id: "text",
  type: "number",
  name: "number",
  label: "Number Input",
  value: state.number,
  onChange: mockOnChange,
};
