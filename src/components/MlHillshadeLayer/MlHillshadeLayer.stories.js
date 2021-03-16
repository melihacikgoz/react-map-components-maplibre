import React from "react";

import TopToolbar from "../../ui_components/TopToolbar";
import MlHillshadeLayer from "./MlHillshadeLayer";

import mapContextDecorator from "../../decorators/MapContextDecorator";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "MapComponents/MlHillshadeLayer",
  component: MlHillshadeLayer,
  argTypes: {
    options: {
      control: {
        type: "object",
      },
    },
  },
  decorators: mapContextDecorator,
};

const Template = (args) => (
  <TopToolbar>
    <MlHillshadeLayer />
  </TopToolbar>
);

export const ExampleConfig = Template.bind({});
ExampleConfig.parameters = {};