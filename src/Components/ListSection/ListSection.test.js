/**
 * @fileoverview Tests for ListSection component.
 */

import React from "react";
import { shallow } from "enzyme";
import { ListSection } from "./ListSection";

describe("ListSection", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
