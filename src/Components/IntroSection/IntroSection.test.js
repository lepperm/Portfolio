/**
 * @fileoverview Tests for IntroSection component.
 */

import React from "react";
import { shallow } from "enzyme";
import { IntroSection } from "./IntroSection";

describe("IntroSection", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<IntroSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
