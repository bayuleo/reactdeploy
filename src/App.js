import React, { Component } from 'react';
// import logo from './logo.svg';
import './Components/Header';
import './Components/Cards';
import './Components/Trending';
import './Components/Footer';
import './App.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Trending from './Components/Trending';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="background">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <Header></Header>
              </div>
              <div className="col-md-2 header-right fa fa-plus-circle">Create Story</div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-3 content-left">
              <Trending></Trending>
              </div>
              <div className="col-md-6 content-center">
              <Cards></Cards>
              <Cards></Cards>
              </div>
              <div className="col-md-3 content-right"></div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
