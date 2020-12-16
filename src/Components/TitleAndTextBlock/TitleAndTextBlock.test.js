/**
 * @fileoverview Tests for TitleAndTextBlock component.
 */

import React from "react";
import { shallow } from "enzyme";
import { TitleAndTextBlock } from "./TitleAndTextBlock";

describe("TitleAndTextBlock", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TitleAndTextBlock />);
    expect(wrapper).toMatchSnapshot();
  });
});
