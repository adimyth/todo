import React, { Component } from "react";
import ListItem from "./listItem";

class DisplayItems extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.list.map((item, index) => (
						<ListItem
							item={item}
							key={index}
							onRemove={this.props.onRemove}
							onCompletion={this.props.onCompletion}
						/>
					))}
				</ul>
			</div>
		);
	}
}

export default DisplayItems;
