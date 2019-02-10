import React, { Component } from 'react';

class CompletedItem extends Component {
    render() {
        return (
			<div className="row">
				<div className="col m3 l3 s2" />
				<div className="col s12 m6 l6">
					<div className="row">
						<div className="input-field col s6">
							<p className="black-text" style={{ fontStyle: "italic"}}>{this.props.item.key}</p>
						</div>
                        <div className="input-field col s6">
							<p className="black-text" style={{ fontStyle: "italic"}}>{this.props.item.value}</p>
						</div>
					</div>
				</div>
			</div>
		);
    }
}

export default CompletedItem;