import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/Footer';
import RootRoute from './router/RootRoute';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          
          <RootRoute />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
