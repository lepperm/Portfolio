/**
 * @fileoverview Tests for App component.
 */

import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("App", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
