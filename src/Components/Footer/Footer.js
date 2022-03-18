/**
 * @fileoverview Footer component.
 */

import React from "react";
import PropTypes from "prop-types";

let currentYear = "2022";

currentYear = new Date().getFullYear();

/**
 * Footer component
 *
 * @return {Component} Footer component
 */
export const Footer = () => {
  return (
    <footer>
      <nav id="social-media">
        <a href="#Twitter">Twitter</a>
        <a href="#LinkedIn">LinkedIn</a>
        <a href="#GitLab#">GitLab</a>
      </nav>
      <aside id="copyright">
        <p>Max Lepper © {currentYear}</p>
      </aside>
      <p>
        Could the footer unload/expand to reveal more details once the user
        scrolls all the way to the bottom of the page?
      </p>
    </footer>
  );
};

/**
 * Prop types for Footer component
 */
Footer.propTypes = {
  //
};
