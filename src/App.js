import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./App.css";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
