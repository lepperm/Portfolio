/**
 * @fileoverview Tests for ProjectCard component.
 */

import React from "react";
import { shallow } from "enzyme";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProjectCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
