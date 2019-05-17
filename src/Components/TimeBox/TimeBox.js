import React from 'react';
import { Button, Counter } from '../../Components';

export const TimeBox = () => {
  return (
    <div className="timeBox-container">
      <div id="top-part">
        <Button className="timer-btn">
          Timer
        </Button>
        <Button className="stopwatch-btn">
          Stopwatch
        </Button>
      </div>
      <div id="bottom-part">
        <Counter className="counter" />
        <Button className="start-pause-btn">
          Start
        </Button>
        <Button className="stop-btn">
          Stop
        </Button>
        <Button className="reset-btn">
          Reset
        </Button>
      </div>
    </div>
  )
}