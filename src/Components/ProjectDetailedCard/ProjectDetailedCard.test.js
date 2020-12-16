/**
 * @fileoverview Tests for ProjectDetailedCard component.
 */

import React from "react";
import { shallow } from "enzyme";
import { ProjectDetailedCard } from "./ProjectDetailedCard";

describe("ProjectDetailedCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProjectDetailedCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
