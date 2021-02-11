import React from 'react';
import {Container, Grid} from '@material-ui/core';
import './App.css';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

function App() {
  return (
    <Container>
      <Grid container>
        <Grid  item xs={12} sm={12} md={4} lg={3}>
          <Profile/>
        </Grid>
        <Grid  item xs>
          <Header/>
          <Portfolio/>
          <Resume/>
          <Footer/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
