import React, { Component } from 'react';
import { Button, Timer, Stopwatch } from '../../Components';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "stopwatch"
    }
  }
  render() {
    const { type } = this.state;
    return (
      <div className="timeBox-container">
        <div id="top-part">
          <Button className="timer-btn" onClick={() => this.setState({ type: "timer" })}>
            Timer
        </Button>
          <Button className="stopwatch-btn" onClick={() => this.setState({ type: "stopwatch" })}>
            Stopwatch
        </Button>
        </div>
        <div id="bottom-part">
          {
            type === "timer"
              ? <Timer className="timer" />
              : <Stopwatch className="stopwatch" />
          }
        </div>
      </div>
    )
  }
}