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
        <h2>
          I help clients solve problems with tailor-designed software solutions.
        </h2>
        <p>Have a challenge you're looking to solve? Let's talk!</p>
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
