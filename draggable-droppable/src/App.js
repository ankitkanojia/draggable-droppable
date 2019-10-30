import React from 'react';
import './App.css'
import Draggable from "y";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="leftDiv">
          <Draggable><img height="100" src={require("./img/gorilla.png")} /></Draggable>
          <img height="100" src={require("./img/panda.jpg")} />
          <img height="100" src={require("./img/puppy.png")} />
        </div>
        <div className="rightDiv">
          <img height="100" src={require("./img/gorilla.png")} />
          <img height="100" src={require("./img/panda.jpg")} />
          <img height="100" src={require("./img/puppy.png")} />
        </div>
      </div>
    );
  }
}

export default App;
