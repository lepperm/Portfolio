/**
 * @fileoverview CarouselSection component.
 */

import React from "react";
import PropTypes from "prop-types";

import { ProjectCard } from "../ProjectCard";

/**
 * CarouselSection component
 *
 * @return {Component} CarouselSection component
 */
export const CarouselSection = () => {
  return (
    <section id="carousel-section">
      <p>Project cards scrolling here</p>
      <ul>
        <li key="indexvalue">
          <p>
            Given an object of X elements, map each element into a template list
            item
          </p>
          <ProjectCard />
        </li>
      </ul>
      <p>
        Maybe a progress bar to show how many projects are in the list and where
        in the list is focused, clickable to jump to entry?
      </p>
    </section>
  );
};

/**
 * Prop types for CarouselSection component
 */
CarouselSection.propTypes = {
  //
};
