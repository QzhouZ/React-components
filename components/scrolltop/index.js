/**
 * Author: Zane 448482356@qq.com
 * Date: 2016-01-25
 */



import React from 'react';

let Test = React.createClass({
	getInitialState() {
	    return {
	        name: 'tom'
	    };
	},
	handle() {
		this.setState({
			name: 'zane'
		});
	},
	componentDidMount() {

	},
	render() {
		var txt;
		if (this.props.type == 1) {
			txt = 13112;
		} else {
			txt = 2212;
		}
		return (
			<div onClick={this.handle}>{this.state.name} {txt}</div>
		);
	}

});

module.exports = Test;
