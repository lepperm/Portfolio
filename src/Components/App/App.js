/**
 * @fileoverview App component.
 */

// Core
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

// Material UI
import { makeStyles } from "@material-ui/core";

// Styling
import "./App.css";

// Components
import { NavBar } from "../NavBar";
import { IntroSection } from "../IntroSection";
import { CarouselSection } from "../CarouselSection";
import { ListSection } from "../ListSection";
import { ContactSection } from "../ContactSection";
import { Footer } from "../Footer";

/**
 * Custom styles for the App component
 * @type {Object} Style object
 */
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    minHeight: "100vh",
    overflowX: "hidden",
  },
}));

/**
 * App component
 *
 * @return {Component} App component
 */
export const App = (props) => {
  const classes = useStyles(props);

  const Content = () => (
    <div className={classes.root}>
      <NavBar />
      <main>
        <IntroSection />
        <CarouselSection />
        <ListSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact strict path="/portfolio/" component={Content} />
          {/* 404 redirect to landing */}
          <Route component={Content} />
        </Switch>
      </div>
    </Router>
  );
};
