import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Collapse,
  Button,
  IconButton,
  SvgIcon,
  Chip,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import StarsIcon from "@material-ui/icons/Stars";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import GradeIcon from "@material-ui/icons/Grade";
import GetAppIcon from "@material-ui/icons/GetApp";
import { ReactComponent as GitLabIcon } from "./images/icons/gitlab_icon.svg";

import { motion } from "framer-motion";
import TextLoop from "react-text-loop";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";

import { ReactComponent as ArrowPrimary } from "./ui/arrow_primary.svg";

import resumeDoc from "./docs/ML_070820_resume.pdf";

import agwsuImg from "./images/photos/agwsu.png";
import firstKommandImg from "./images/photos/FirstKommand.png";
import rttdImg from "./images/photos/RealtimeTo-Do.png";

import "./App.css";

function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: -1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="AppContent">
        <section href="landing" style={{ height: "100vh", padding: "0 1em" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography variant="h3" color="inherit">
              Hi, I'm Max!
            </Typography>
            <Typography variant="h4" color="inherit">
              I am an aspiring front-end developer.
            </Typography>
            <div>
              <br />
              <br />
            </div>
            <a href="http://localhost:3000#about">
              <Button
                variant="outlined"
                size="large"
                style={{
                  border: "3px solid",
                  borderRadius: "0px",
                  borderColor: "lightgrey",
                }}
              >
                See my work
              </Button>
            </a>
          </div>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{ ease: "easeInOut", loop: Infinity, duration: 2 }}
            style={{ position: "relative", bottom: "2em" }}
          >
            <ArrowPrimary style={{ width: "5vw" }} />
          </motion.div>
        </section>
        <section id="about">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography color="inherit">
                    My background so far has been engineering, with the past
                    five years focused in{" "}
                    <Tooltip
                      title="Mobile Electronic Controls is a term for vehicles or mobile equipment, typically used in industrial or commercial sectors, that utilize a programmable logic controller, sensors, and various operator inputs to automate operator functions, increase operator safety, and provide rich data. Some other systems I have worked on include a piling excavator, a mine belt winder, lumber processing equipment, a leaf suction truck, and a rock crushing control tower."
                      placement="bottom"
                      arrow
                    >
                      <span style={{ color: "darkblue" }}>
                        Mobile Electronic Controls.
                      </span>
                    </Tooltip>
                    <br />
                    <br />
                    After work, my evenings are filled with learning and
                    projects, both on my own and with peers. I recently built a
                    Python web scraper to acquire data for use in learning
                    MySQL.
                    <br />
                    <br /> When not programming, I enjoy practicing animation
                    and bartending, and my wife and I love adventures.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                Skills & Experience
              </Typography>
              <Grid container justify="space-evenly" alignItems="center">
                <Chip
                  variant="outlined"
                  size="small"
                  label="JavaScript"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="ReactJS"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="HTML/CSS"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="Git"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="SVN"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="Agile PM"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="npm"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="IEC 61131-3"
                  onClick={null}
                />
              </Grid>
            </Grid>
          </Grid>
        </section>
        <section id="projects">
          <Typography variant="h4" gutterBottom>
            Projects
          </Typography>
          <Grid
            container
            justify="space-evenly"
            alignItems="stretch"
            spacing={3}
            style={{
              minWidth: "200px",
            }}
          >
            <Grid item xs={12} md={6} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  image={agwsuImg}
                  title="Adventurer's Guild Wright State University"
                  style={{
                    height: 0,
                    backgroundPosition: "center 0",
                    minWidth: "200px",
                    paddingTop: "56.25%", // 16:9
                  }}
                />
                <CardContent>
                  <Typography variant="body2" component="p">
                    Adventurer's Guild Wright State University
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  image={firstKommandImg}
                  title="First Kommand Cyklone Mixer"
                  style={{
                    height: 0,
                    backgroundPosition: "center 0",
                    minWidth: "200px",
                    paddingTop: "56.25%", // 16:9
                  }}
                />
                <CardContent>
                  <Typography variant="body2" component="p">
                    First Kommand Cyklone Mixer <br />
                    (Truck application, not website)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card style={{ height: "100%" }}>
                <CardMedia
                  image={rttdImg}
                  title="Realtime To-Do"
                  style={{
                    height: 0,
                    backgroundPosition: "center 0",
                    minWidth: "200px",
                    paddingTop: "56.25%", // 16:9
                  }}
                />
                <CardContent>
                  <Typography variant="body2" component="p">
                    Realtime To-Do
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section id="qualifications">
          <Grid
            container
            justify="space-evenly"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} md={6}>
              <Card style={{ height: "100%" }}>
                <CardHeader title="Awards and Competitions" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <StarsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="G. W. Hoffman Technical Excellence"
                        secondary="2019 - Highest technical award"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <EmojiEventsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Festo International Coding Challenge"
                        secondary="2019 - 28th global finalist"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <GradeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Scott Industrial Officer's Award"
                        secondary="2017 - Excellence with cement mixer project"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <GradeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Scott Industrial Officer's Award"
                        secondary="2014 - Excellence in implementing new documentation standards"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card style={{ height: "100%" }}>
                <CardHeader title="Certifications and Education" />
                <CardContent>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <StarsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Software Project Management Specialization"
                        secondary="2020 - Coursera"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <EmojiEventsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Associate of Applied Science"
                        secondary="2011 - Sinclair Community College"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <GradeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Eagle Scout"
                        secondary="Boy Scouts of America"
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section id="resume">
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    If you prefer a traditional resume, you can download a copy
                    <br />
                    <br />
                  </Typography>
                  <a href={resumeDoc}>
                    <Button
                      variant="outlined"
                      size="large"
                      style={{
                        border: "3px solid",
                        borderRadius: "0px",
                        borderColor: "lightgrey",
                      }}
                      aria-label="Download my resume"
                    >
                      View my resume
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section id="contact">
          <Typography variant="h6" color="inherit">
            Let's talk!
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={4} lg={4}>
              <Tooltip title="GitLab" placement="bottom" arrow>
                <a href="https://gitlab.com/maxlepper">
                  <SvgIcon
                    viewBox="0 0 492.50943 453.67966"
                    component={GitLabIcon}
                    fontSize="large"
                    aria-label="GitLab"
                  />
                </a>
              </Tooltip>
            </Grid>
            <Grid item xs={4} lg={4}>
              <Tooltip title="Email" placement="bottom" arrow>
                <a href=" mailto:maxllepper@gmail.com?subject=Portfolio%20Inquiry">
                  <EmailIcon
                    aria-label="Email"
                    fontSize="large"
                    style={{ color: "#9E271D" }}
                  />
                </a>
              </Tooltip>
            </Grid>
            <Grid item xs={4} lg={4}>
              <Tooltip title="LinkedIn" placement="bottom" arrow>
                <a href="https://www.linkedin.com/in/maxlepper/">
                  <LinkedInIcon
                    aria-label="LinkedIn"
                    fontSize="large"
                    style={{ color: "#005F91" }}
                  />
                </a>
              </Tooltip>
            </Grid>
          </Grid>
        </section>
        <section id="edited" style={{ height: "2em" }}>
          <span>Made with </span>
          <TextLoop mask={true}>
            <span role="img" aria-label="heart">
              ❤️
            </span>
            <span role="img" aria-label="music">
              🎶
            </span>
            <span role="img" aria-label="coffee">
              ☕
            </span>
            <span role="img" aria-label="lots of reading">
              📚
            </span>
          </TextLoop>
          <span> by Max Lepper, 2020</span>
        </section>
      </div>
    </div>
  );
}

export default App;
