import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = { task: " Welcome To Our Movies" };
  }
  render() {
    return <h1 style={{ backgroundColor:"red",color: "white" ,borderRadius:5 , width:50 ,padding:20  }}>{this.state.task}</h1>;
  }
}

export default Welcome;
