/**
 * @fileoverview TitleAndTextBlock component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * TitleAndTextBlock component
 *
 * @param {*} props
 * @return {Component} TitleAndTextBlock component
 */
export const TitleAndTextBlock = (props) => {
  const { title, message } = props;

  return (
    <div>
      <header>
        <h2>{title}</h2>
      </header>
      <p>{message}</p>
    </div>
  );
};

/**
 * Prop types for TitleAndTextBlock component
 */
TitleAndTextBlock.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

/**
 * Default values for TitleAndTextBlock component props
 */
TitleAndTextBlock.defaultProps = {
  title: "Title",
  message: "This is text explaining and supporting the section.",
};
