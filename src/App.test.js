/**
 * @fileoverview Tests for App.js
 */

import React from "react";
import { render } from "enzyme";

import App from "./App";

it("should render the App", () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
