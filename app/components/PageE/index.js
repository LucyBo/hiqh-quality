import React, { Component } from 'react';
import './PageE.scss';
import Board from "./Board.js";

export default class PageE extends Component {
	render() {
		return (
			<div className="lights-game">
				<Board/>
			</div>
		);
	}
}
