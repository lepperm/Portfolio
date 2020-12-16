/**
 * @fileoverview NavBar component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * NavBar component
 *
 * @return {Component} NavBar component
 */
export const NavBar = () => {
  return (
    <nav id="site-nav">
      <div id="query-over-mid-size-screens">
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#Background">Background</a>
        <a href="#Contact">Contact</a>
        <a href="#LearningLog">Learning Log</a>
      </div>
      <div id="query-mid-size-screens-under">
        <a href="#Projects">Projects</a>
        <a href="#Skills">Skills</a>
        <a href="#Background">Background</a>
        <a href="#Contact">Contact</a>
        <a href="#LearningLog">Learning Log</a>
      </div>
    </nav>
  );
};

/**
 * Prop types for NavBar component
 */
NavBar.propTypes = {
  //
};
