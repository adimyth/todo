import React, { Component } from "react";

class AddButton extends Component {
	render() {
		return (
			<div>
				<button
					className="btn waves-light small"
					type="submit"
					name="action"
				>
					<i className="material-icons center">add</i>
				</button>
			</div>
		);
	}
}

export default AddButton;
