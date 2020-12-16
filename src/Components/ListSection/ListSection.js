/**
 * @fileoverview ListSection component.
 */

import React from "react";
import PropTypes from "prop-types";

import { ListBlock } from "../ListBlock";
import { TitleAndTextBlock } from "../TitleAndTextBlock";

/**
 * ListSection component
 *
 * @return {Component} ListSection component
 */
export const ListSection = () => {
  return (
    <section>
      <TitleAndTextBlock />
      <ListBlock />
      <p>
        List section. Maybe this could take props to either stack vertically or
        horizontally (desktop). Made up of ((header - text body)(ul list
        elements))?
      </p>
    </section>
  );
};

/**
 * Prop types for ListSection component
 */
ListSection.propTypes = {
  //
};
