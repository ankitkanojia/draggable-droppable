import React from 'react';
import './App.css'
import Draggable from "react-draggable";

class App extends React.Component {

  state = {
    leftWidth : 0
  }


  componentDidMount(){
    this.setState({
      leftWidth : this.refs["leftDiv"].getBoundingClientRect().width + this.refs["leftDiv"].getBoundingClientRect().x
    });
  }

  handleStop = (e, data) => {
    const imagewidh = this.refs["firstImg"].getBoundingClientRect().width + this.refs["firstImg"].getBoundingClientRect().x;
    if(imagewidh < this.state.leftWidth)
    {
      console.log("inside");
    }else{
      console.log("outside");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="leftDiv" ref={"leftDiv"}>
          <Draggable onStop={this.handleStop}><img ref={"firstImg"} height="100" src={require("./img/gorilla.png")} /></Draggable>
          <Draggable onStop={this.handleStop}><img ref={"firstImg"} height="100" src={require("./img/panda.jpg")} /></Draggable>
          <Draggable onStop={this.handleStop}><img ref={"firstImg"} height="100" src={require("./img/puppy.png")} /></Draggable>
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
