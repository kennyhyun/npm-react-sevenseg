import React, { Component } from 'react';

import { SSString } from './components';

export class DigitalClock extends Component {
  state = { tick: 0 };
  tick = () => {
    setTimeout(() => {
      this.setState({ tick: this.state.tick + 1 });
    }, 1000);
  };
  componentDidUpdate = this.tick;
  componentDidMount = this.tick;
  render = () => {
    const timestr = new Date().toLocaleTimeString('en-GB');
    return <SSString str={timestr} />;
  };
}

