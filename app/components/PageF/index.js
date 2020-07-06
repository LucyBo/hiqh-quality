import React, { Component } from 'react';
import './PageF.scss';
import TodoList from './TodoList.js';

export default class PageF extends Component {
	render() {
		return (
			<div>
				<TodoList/>
			</div>
		);
	}
}
