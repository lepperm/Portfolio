/**
 * @fileoverview ContactSection component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * ContactSection component
 *
 * @return {Component} ContactSection component
 */
export const ContactSection = () => {
  return (
    <section>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSfPFOqfb7Ig-44Lm7Sr7g0G62HkJwj2MDIe8YzUdYjz4-Aq_A/formResponse"
        method="post"
      >
        <label htmlFor="email">Email Address*</label>
        <input
          type="email"
          placeholder="your.email@gmail.com"
          name="emailAddress"
          aria-label="Your email"
          required
        />
        <label htmlFor="entry.2005620554">Name*</label>
        <input
          type="text"
          placeholder="Your name"
          name="entry.2005620554"
          required
        />
        <label htmlFor="entry.514139982">Phone</label>
        <input
          type="tel"
          placeholder="123-456-7890"
          name="entry.514139982"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <label htmlFor="entry.839337160">Message*</label>
        <textarea
          rows="5"
          placeholder=""
          name="entry.839337160"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

/**
 * Prop types for ContactSection component
 */
ContactSection.propTypes = {
  //
};
