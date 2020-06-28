import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Typography,
  Grid,
  AppBar,
  Toolbar,
  Card,
  Button,
} from "@material-ui/core";

import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            React & Material-UI Sample Application
          </Typography>
        </Toolbar>
      </AppBar>
      <motion.div
        style={{ backgroundColor: "grey", height: "50px", width: "50px" }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 90, 90, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    </div>
  );
}

export default App;
