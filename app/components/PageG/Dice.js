import React, { Component } from 'react';
import './Dice.scss';
import Die from './Die';

export default class Dice extends Component {
    render() {
      return <div className="Dice">
        {this.props.dice.map((d, idx) =>
          <Die handleClick={this.props.handleClick}
            val={d}
            locked={this.props.locked[idx]}
            idx={idx}
            key={idx} />
        )}
      </div>
    }
  }
