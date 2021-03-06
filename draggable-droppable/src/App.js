import React from 'react';
import './App.css'
import Draggable from "react-draggable";

class App extends React.Component {

  state = {
    leftWidth: 0,
    controlledLeftPosition: [
      { left: -32, top: -32, right: 1388, bottom: 36, position: "left" },
      { left: -132, top: -32, right: 1288, bottom: 36, position: "left" },
      { left: -232, top: -32, right: 1188, bottom: 36, position: "left" }
    ],
    controlledRightPosition: [
      { left: -880, top: -32, right: 540, bottom: 36, position: "right" },
      { left: -980, top: -32, right: 440, bottom: 36, position: "right" },
      { left: -1080, top: -32, right: 340, bottom: 36, position: "right" }
    ]
  }


  componentDidMount() {
    //console.log(this.refs["leftDiv"].getBoundingClientRect());
    //console.log(this.refs["rightDiv"].getBoundingClientRect());
    this.setState({
      leftWidth: this.refs["leftDiv"].getBoundingClientRect().width + this.refs["leftDiv"].getBoundingClientRect().x,
      rightWidth: this.refs["rightDiv"].getBoundingClientRect().left
    });
  }

  handleStop = (index) => {
    const imagewidh = this.refs["img_" + index].getBoundingClientRect().width + this.refs["img_" + index].getBoundingClientRect().x;
    let updatedArrayLeft = this.state.controlledLeftPosition;
    let updatedArrayRight = this.state.controlledRightPosition;
    if (index > 3) {
      if (imagewidh < this.state.leftWidth) {
        updatedArrayRight[index - 3].position = "left";
      } else {
        updatedArrayRight[index - 3].position = "right";
      }
    } else {
      if (imagewidh < this.state.leftWidth) {
        updatedArrayLeft[index - 1].position = "left";
      } else {
        updatedArrayLeft[index - 1].position = "right";
      }
    }

    this.setState({
      controlledLeftPosition: [...updatedArrayLeft],
      controlledRightPosition: [...updatedArrayRight]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="leftDiv" ref={"leftDiv"}>
          <Draggable bounds={this.state.controlledLeftPosition[0]} onStop={() => this.handleStop(1)}><img ref={"img_1"} height="100" src={require("./img/gorilla.png")} /></Draggable>
          <Draggable bounds={this.state.controlledLeftPosition[1]} onStop={() => this.handleStop(2)}><img ref={"img_2"} height="100" src={require("./img/panda.jpg")} /></Draggable>
          <Draggable bounds={this.state.controlledLeftPosition[2]} onStop={() => this.handleStop(3)}><img ref={"img_3"} height="100" src={require("./img/puppy.png")} /></Draggable>
        </div>
        <div className="rightDiv" ref={"rightDiv"}>
          <Draggable bounds={this.state.controlledRightPosition[0]} onStop={() => this.handleStop(4)}><img ref={"img_4"} height="100" src={require("./img/gorilla.png")} /></Draggable>
          <Draggable bounds={this.state.controlledRightPosition[1]} onStop={() => this.handleStop(5)}><img ref={"img_5"} height="100" src={require("./img/panda.jpg")} /></Draggable>
          <Draggable bounds={this.state.controlledRightPosition[2]} onStop={() => this.handleStop(6)}><img ref={"img_6"} height="100" src={require("./img/puppy.png")} /></Draggable>
        </div>
        <br />
        <ul style={{ marginTop: 200 }}>
          {this.state.controlledLeftPosition.map((data, index) => {
            return <li key={index + 1}>{index + 1} {data.position}</li>
          })}
        </ul>
        <br />
        <ul>
          {this.state.controlledRightPosition.map((data, index) => {
            return <li key={index + 1}>{index + 4} {data.position}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
