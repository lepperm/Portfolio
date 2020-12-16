/**
 * @fileoverview ListBlock component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * ListBlock component
 *
 * @return {Component} ListBlock component
 */
export const ListBlock = () => {
  return (
    <div>
      <ul>
        <li key="indexvalue">
          given an object of X elements, map each element into a template list
          item
        </li>
      </ul>
    </div>
  );
};

/**
 * Prop types for ListBlock component
 */
ListBlock.propTypes = {
  //
};
