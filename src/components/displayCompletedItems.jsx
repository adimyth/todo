import React, { Component } from "react";
import CompletedItem from "./completedItem";

class DisplayCompletedItems extends Component {
	render() {
		return (
			<div className="row">
				<blockquote>
					<span className="card-title">Completed Tasks</span>
				</blockquote>
                <div></div>
				<div className="col m3 l3 s2" />
				<ul>
					{this.props.list.map((item, index) => (
						<CompletedItem item={item} key={index} />
					))}
				</ul>
			</div>
		);
	}
}

export default DisplayCompletedItems;
