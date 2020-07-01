import React, { Component } from 'react';
import './PageD.scss';
import RollDice from './RollDice.js';

export default class PageD extends Component {
	render() {
		return (
			<div className="Dice">
				<h2 className="text-center">Dice Roll</h2>
				<div className="container-die">
				<RollDice/>
				</div>
			</div>
		);
	}
}
