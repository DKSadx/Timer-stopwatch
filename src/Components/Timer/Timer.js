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
    const { className, type } = this.props;
    const { paused, h, m, s } = this.state;
    console.log(type);
    return (
      <>
        <div className={className}>
          <ul>
            <li>
              <i class="fas fa-sort-up" />
              {h < 10 ? "0" + h : h}
              <i class="fas fa-sort-down" />
            </li>

            <li>
              <i class="fas fa-sort-up" />
              {m < 10 ? "0" + m : m}
              <i class="fas fa-sort-down" />
            </li>
            <li>
              <i class="fas fa-sort-up" />
              {s < 10 ? "0" + s : s}
              <i class="fas fa-sort-down" />
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