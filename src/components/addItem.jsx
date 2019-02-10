import React, { Component } from "react";
import AddButton from "./addButton";

class AddItem extends Component {
	render() {
		return (
			<div className="row">
				<div className="col s3 m3 l3" />
				<form className="col s12 m6 l6"  onSubmit={this.props.onNewInput}>
					<div className="row">
						<div className="input-field col s6">
							<input
								className="input center"
								type="text"
								onChange={this.props.onInputChange}
								value={this.props.value}
								placeholder="Add an item"
							/>
						</div>
						<div className="input-field col s6">
							<AddButton />
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddItem;
