import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Button,
  SvgIcon,
  Chip,
  Tooltip,
  Link,
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
import SchoolIcon from "@material-ui/icons/School";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import ExploreIcon from "@material-ui/icons/Explore";
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

function App() {
  return (
    <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="AppContent">
        <section href="landing" style={{ height: "100vh", padding: "0 1em" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
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
            <div>
              <Button
                variant="outlined"
                size="large"
                href="#about"
                style={{
                  border: "3px solid",
                  borderRadius: "0px",
                  borderColor: "lightgrey",
                }}
              >
                See my work
              </Button>
            </div>
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
            <Grid item xs={12} md={9}>
              <Card>
                <CardContent>
                  <Typography color="inherit" align="left">
                    My background is actually in engineering, where I am
                    currently developing{" "}
                    <Tooltip
                      title="Utilizing PLCs, sensors, and operator input devices to automate operations, increase operator safety, and generate rich data on industrial vehicles."
                      placement="bottom"
                      arrow
                    >
                      <span style={{ color: "darkblue" }}>
                        Mobile Electronic Controls&nbsp;
                      </span>
                    </Tooltip>
                    applications using IEC 611131-3 PLC languages for the
                    industrial market and managing development projects. In
                    these applications, developing intuitive and responsive
                    operator interfaces is one of my key focuses.
                    <br />
                    <br />
                    In a similar vein, I am fascinated with the current
                    capabilities of the web when it comes to conveying
                    information to users. I have been actively developing my
                    front-end skills in the evenings, with a keen interest in
                    specializing in data visualization (ask me about my
                    spreadsheets!).
                    <br />
                    <br /> When not programming, I enjoy developing my animation
                    and bartending skills, and my wife and I are avid
                    adventurers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h5" gutterBottom>
                Skills & Experience
              </Typography>
              <Grid container justify="space-around" alignItems="center">
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
                  label="Python"
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
                  label="NPM"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="IEC 61131-3"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="Excel"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="Remote Communication"
                  onClick={null}
                />
                <Chip
                  variant="outlined"
                  size="small"
                  label="Client Interaction"
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
                  <Typography variant="h6">
                    <Link href="https://www.agwsu.org/" color="inherit">
                      Adventurer's Guild Wright State University
                    </Link>
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
                  <Tooltip
                    title="I was not involved in the website development, but rather the software controlling the system on these cement trucks. There are currently over 800 units in the field, and the system is capabile of over 12 million unique configurations."
                    placement="bottom"
                    arrow
                  >
                    <Typography variant="h6">
                      First Kommand Cyklone Mixer
                    </Typography>
                  </Tooltip>
                  <br />
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
                  <Typography variant="h6">
                    <Link
                      href="https://realtime-to-do-225fa.web.app/"
                      color="inherit"
                    >
                      Realtime To-Do
                    </Link>
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
                          <CardMembershipIcon />
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
                          <SchoolIcon />
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
                          <ExploreIcon />
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
                    If you prefer a traditional resume, you can find mine here.
                    <br />
                    <br />
                  </Typography>
                  <div>
                    <Button
                      variant="outlined"
                      size="large"
                      href={resumeDoc}
                      style={{
                        border: "3px solid",
                        borderRadius: "0px",
                        borderColor: "lightgrey",
                      }}
                      aria-label="Download my resume"
                    >
                      View my resume
                    </Button>
                  </div>
                  <Typography variant="h6">
                    <br />I also have references and a full CV upon request.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </section>
        <section id="contact">
          <Typography variant="h5" color="inherit">
            Let's talk!
            <br />
            <br />
          </Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="stretch"
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
