import React, { Component } from 'react';
import moment from "moment"; 
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h3>I Want Food</h3>
        <h2>Give Me Food</h2>
        <h1>Now!!!!!</h1>
        <div>
          {moment().format("MMMM Do YYY, h:mm:ss a")}
        </div>
      </div>
    );
  }
}
