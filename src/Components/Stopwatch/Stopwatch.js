import React, { Component } from 'react';
import { Button } from '../../Components';

export class Stopwatch extends Component {
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
        if (this.state.m - 59 === 0 && this.state.s - 59 === 0) {
          this.setState({
            h: this.state.h + 1,
            m: 0,
            s: 0
          })
        }
        else if (this.state.s - 59 === 0) {
          this.setState({
            m: this.state.m + 1,
            s: 0
          })
        } else {
          this.setState({ s: this.state.s + 1 });
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
  render() {
    const { className } = this.props;
    const { paused, h, m, s } = this.state;
    return (
      <>
        <div className={className}>
          <ul>
            <li>
              {h < 10 ? "0" + h : h}
            </li>

            <li>
              {m < 10 ? "0" + m : m}
            </li>
            <li>
              {s < 10 ? "0" + s : s}
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