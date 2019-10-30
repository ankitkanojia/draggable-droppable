import React from 'react';
import './App.css'
import Draggable from "react-draggable";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="leftDiv">
          <Draggable><img height="100" src={require("./img/gorilla.png")} /></Draggable>
          <Draggable><img height="100" src={require("./img/panda.jpg")} /></Draggable>
          <Draggable><img height="100" src={require("./img/puppy.png")} /></Draggable>
        </div>
        <div className="rightDiv">
          <Draggable><img height="100" src={require("./img/gorilla.png")} /></Draggable>
          <Draggable><img height="100" src={require("./img/panda.jpg")} /></Draggable>
          <Draggable><img height="100" src={require("./img/puppy.png")} /></Draggable>
        </div>
      </div>
    );
  }
}

export default App;
