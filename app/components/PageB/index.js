import React, { Component } from 'react';
import './PageB.scss';

function getNum() {
	return Math.floor(Math.random() * 10) + 1;
}
export default class PageB extends Component {
	render() {
		const num = getNum();
		let msg;
		if (num === 7) {
			msg =
				<div>
					<h2>CONGRATS YOU WIN!</h2>
					<img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
				</div>
		} else {
			msg = <p>Sorry You Lose!</p>
		}
		return (
			<div>
				<h1>Your number is: {num} </h1>
				{msg}
			</div>
		);
	}
}
