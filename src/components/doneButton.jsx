import React, { Component } from "react";

class DoneButton extends Component {
	render() {
		return (
			<button
                className="btn waves-light small"
				type="submit"
				name="action"
				onClick={() => this.props.onCompletion(this.props.item)}
			>
				<i className="material-icons center">done</i>
			</button>
		);
	}
}

export default DoneButton;
