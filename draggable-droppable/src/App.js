  import React from 'react';
import './App.css'
import Draggable from "react-draggable";

class App extends React.Component {

  state = {
    leftWidth : 0,
    controlledPosition: { left : 100, top : 0, right : 480, bottom : 175.60000610351562 }
  }


  componentDidMount(){
    console.log(this.refs["leftDiv"].getBoundingClientRect());
    // this.setState({
    //   leftWidth : this.refs["leftDiv"].getBoundingClientRect().width + this.refs["leftDiv"].getBoundingClientRect().x
    // });
  }

  handleStop = (index) => {
    const imagewidh = this.refs["img_" + index].getBoundingClientRect().width + this.refs["img_" + index].getBoundingClientRect().x;
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
          <Draggable bounds={{ left : -35, top : -35, right : 550, bottom : 43 }} onStop={() => this.handleStop(1)}><img ref={"img_1"} height="100" src={require("./img/gorilla.png")} /></Draggable>
          <Draggable onStop={() => this.handleStop(2)}><img ref={"img_2"} height="100" src={require("./img/panda.jpg")} /></Draggable>
          <Draggable onStop={() => this.handleStop(3)}><img ref={"img_3"} height="100" src={require("./img/puppy.png")} /></Draggable>
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
