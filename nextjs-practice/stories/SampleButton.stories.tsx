// src/components/Task.stories.js

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SampleButton from "./SampleButton";

export default {
  component: SampleButton,
  title: "SampleButton",
  argTypes: {
    backgroundColor: { control: "color" },
    label: { defaultValue: "Button" },
  },
} as ComponentMeta<typeof SampleButton>;

const Template: ComponentStory<typeof SampleButton> = (args) => (
  <SampleButton {...args} />
);

export const Kakao = Template.bind({});
Kakao.args = {
  social: "kakao",
};

export const Apple = Template.bind({});
Apple.args = {
  social: "apple",
};

export const Google = Template.bind({});
Google.args = {
  social: "google",
};
