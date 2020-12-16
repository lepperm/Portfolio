/**
 * @fileoverview Tests for CarouselSection component.
 */

import React from "react";
import { shallow } from "enzyme";
import { CarouselSection } from "./CarouselSection";

describe("CarouselSection", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CarouselSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
