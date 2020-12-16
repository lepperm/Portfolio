/**
 * @fileoverview Tests for TestimonialSection component.
 */

import React from "react";
import { shallow } from "enzyme";
import { TestimonialSection } from "./TestimonialSection";

describe("TestimonialSection", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TestimonialSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
