import React, { Component } from 'react';
import './PageH.scss';
import JokeList from './JokeList';

export default class PageH extends Component {
	render() {
		return (
			<div className="JokeListContainer text-center">
				<JokeList/>
			</div>
		);
	}
}
