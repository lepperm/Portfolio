/**
 * @fileoverview Tests for ContactSection component.
 */

import React from "react";
import { shallow } from "enzyme";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ContactSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
