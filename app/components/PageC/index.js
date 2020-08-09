import React, { Component } from 'react';
import './PageC.scss';


export default class PageC extends Component {
	constructor(props) {
		super(props);
		this.state = {number : 0};
		this.genRandom = this.genRandom.bind(this);
	}
	genRandom() {
		let rand = Math.floor(Math.random() * 10) +1;
		this.setState({number : rand});
	}
  render() {
    return (
			 <div>
			 <h1>Your number is: {this.state.number} </h1>
			 {this.state.number === 7 
				? <h2> You win! </h2>
				: <button onClick={this.genRandom}>Click me!</button>
				}
      </div>
    )
  }
}