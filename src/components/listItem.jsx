import React, { Component } from "react";
import DoneButton from "./doneButton";
import RemoveButton from "./removeButton";

class ListItem extends Component {
	render() {
		return (
			<div className="row">
				<div className="col m3 l3 s2" />
				<div className="col s12 m6 l6">
					<div className="row">
						<div className="input-field col s6">
							<p>{this.props.item}</p>
						</div>
						<div className="input-field col s6">
							<DoneButton
								onCompletion={this.props.onCompletion}
								item={this.props.item}
							/>
							<RemoveButton
								onRemove={this.props.onRemove}
								item={this.props.item}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ListItem;
