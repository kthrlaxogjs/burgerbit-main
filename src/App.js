import './App.css';

import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
       <nav>
        <img id="logo" src="/MYIMG/bblogo-main.png" alt="로고"></img>
        <ul>
          <li><a href="#">sadf</a></li>
          <li><a href="#">sadf</a></li>
          <li><a href="#">sadf</a></li>
        </ul>
       </nav>
      </div>
    );
  }
}



export default App;
