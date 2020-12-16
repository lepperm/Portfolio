/**
 * @fileoverview IntroSection component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * IntroSection component
 *
 * @return {Component} IntroSection component
 */
export const IntroSection = () => {
  return (
    <section id="introduction">
      <header>
        <h1>Hi, I'm Max!</h1>
        <h2>I'm a software developer focused in React from Dayton, Ohio.</h2>
      </header>
    </section>
  );
};

/**
 * Prop types for IntroSection component
 */
IntroSection.propTypes = {
  //
};
