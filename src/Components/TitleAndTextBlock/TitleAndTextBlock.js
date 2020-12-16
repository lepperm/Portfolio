/**
 * @fileoverview TitleAndTextBlock component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * TitleAndTextBlock component
 *
 * @return {Component} TitleAndTextBlock component
 */
export const TitleAndTextBlock = () => {
  return (
    <div>
      <header>
        <h2>Title</h2>
      </header>
      <p>The text explaining and supporting the section</p>
    </div>
  );
};

/**
 * Prop types for TitleAndTextBlock component
 */
TitleAndTextBlock.propTypes = {
  //
};
