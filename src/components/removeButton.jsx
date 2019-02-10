import React, { Component } from "react";

class RemoveButton extends Component {
	render() {
		return (
			<button
				className="btn waves-light small"
				style={{ marginLeft: 10 }}
				type="submit"
				name="action"
				aria-label="Delete"
				onClick={() => this.props.onRemove(this.props.item)}
			>
				<i className="material-icons center">delete</i>
			</button>
		);
	}
}

export default RemoveButton;
