/**
 * @fileoverview Tests for ListBlock component.
 */

import React from "react";
import { shallow } from "enzyme";
import { ListBlock } from "./ListBlock";

describe("ListBlock", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListBlock />);
    expect(wrapper).toMatchSnapshot();
  });
});
