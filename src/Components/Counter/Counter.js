import React, { Component } from 'react';
import { Button, Timer, Stopwatch } from '../../Components';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "stopwatch",
      stopwatchClass: "stopwatch-btn-pressed",
      timerClass: "timer-btn"
    }
  }
  render() {
    const {
      type,
      stopwatchClass,
      timerClass
    } = this.state;
    return (
      <div className="counter">
        <div id="top-part">
          <Button
            className={timerClass}
            onClick={
              () => {
                this.setState({
                  type: "timer",
                  stopwatchClass: "stopwatch-btn",
                  timerClass: "timer-btn-pressed"
                })
              }
            }
          >
            Timer
          </Button>
          <Button
            className={stopwatchClass}
            onClick={
              () => {
                this.setState({
                  type: "stopwatch",
                  stopwatchClass: "stopwatch-btn-pressed",
                  timerClass: "timer-btn"
                })
              }
            }
          >
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