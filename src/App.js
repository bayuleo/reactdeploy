import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    <div className="main-div">
      <div className="header-div">
        <div className="logo"><h1 className="logo">RBD</h1></div>
        <div className="menu">
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Expert</a></li>
        </ul>
        </div>
      </div>
      <div className="body-content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-content">
                <img src="https://images.pexels.com/photos/977971/pexels-photo-977971.jpeg"></img>
              </div>
              <div className="image-desc">
                <h6>User Experience Engineer</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="description">
                <h1>Rahmad Bayu</h1>
                <h1 className="secondname">Darmawan</h1>
                <hr></hr>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Enter email address" aria-label="Enter email address" aria-describedby="basic-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Subscribe me !</button>
                  </div>
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default App;
