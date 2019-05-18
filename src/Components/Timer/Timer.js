import React, { Component } from 'react';
import { Button } from '../../Components';
export class Timer extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      paused: false,
      h: 0,
      m: 0,
      s: 0
    }
  }

  startCounting() {
    if (!this.state.paused) {
      this.setState({ paused: true })
      this.count = setInterval(() => {
        if (this.state.m === 0 && this.state.s === 0) {
          this.setState({
            h: this.state.h - 1,
            m: 59,
            s: 0
          })
        }
        else if (this.state.s === 0) {
          this.setState({
            m: this.state.m - 1,
            s: 59
          })
        } else {
          this.setState({ s: this.state.s - 1 });
        }
      }, 1000);
    } else {
      this.setState({ paused: false })
      clearInterval(this.count);
    }
  }
  reset() {
    clearInterval(this.count);
    this.setState({
      paused: false,
      h: 0,
      m: 0,
      s: 0
    });
  }

  changeNumber(timeType, arrow) {
    if (arrow === "down") {
      this.state[timeType] === 0
        ? this.setState({ [timeType]: 59 })
        : this.setState({ [timeType]: this.state[timeType] - 1 })
    } else {
      this.state[timeType] === 59
        ? this.setState({ [timeType]: 0 })
        : this.setState({ [timeType]: this.state[timeType] + 1 })
    }

  }
  render() {
    const { className } = this.props;
    const { paused, h, m, s } = this.state;
    return (
      <>
        <div className={className}>
          <ul>
            <li>
              <i onClick={() => this.changeNumber("h", "up")} className="fas fa-sort-up" />
              {h < 10 ? "0" + h : h}
              <i onClick={() => this.changeNumber("h", "down")} className="fas fa-sort-down" />
            </li>

            <li>
              <i onClick={() => this.changeNumber("m", "up")} className="fas fa-sort-up" />
              {m < 10 ? "0" + m : m}
              <i onClick={() => this.changeNumber("m", "down")} className="fas fa-sort-down" />
            </li>
            <li>
              <i onClick={() => this.changeNumber("s", "up")} className="fas fa-sort-up" />
              {s < 10 ? "0" + s : s}
              <i onClick={() => this.changeNumber("s", "down")} className="fas fa-sort-down" />
            </li>
          </ul>
        </div>
        <Button className="start-pause-btn" onClick={() => this.startCounting()}>
          {!paused ? "Start" : "Pause"}
        </Button>
        <Button className="stop-btn">
          Pholder
        </Button>
        <Button className="reset-btn" onClick={() => this.reset()}>
          Reset
        </Button>

      </>
    );
  }
}