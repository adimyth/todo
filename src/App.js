import React, { Component } from "react";
import AddItem from "./components/addItem";
import DisplayItems from "./components/displayItems";
import DisplayCompletedItems from "./components/displayCompletedItems";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: "",
			itemLists: [],
			completedLists: []
		};
	}

	handleInputChange = event => {
		this.setState({
			newItem: event.target.value
		});
	};

	handleNewInput = event => {
		console.log("New task added");
		event.preventDefault();
		this.setState({
			itemLists: [this.state.newItem, ...this.state.itemLists],
			newItem: ""
		});
	};

	handleRemoveItem = itemPassed => {
		console.log("Item removed");
		this.setState({
			itemLists: this.state.itemLists.filter(item => item !== itemPassed)
		});
	};

	handleCompletedItem = itemPassed => {
		console.log("Task completed");
		let tasks = this.state.completedLists.slice();
		tasks.push({
			key: itemPassed,
			value: new Date().toDateString()
		});
		this.setState({
			completedLists: tasks,
			itemLists: this.state.itemLists.filter(item => item !== itemPassed)
		});
	};

	render() {
		const isCompleted = this.state.completedLists.length ? true : false;
		return (
			<div className="row">
				<div className="col m3 l3 s3" />
				<div className="col s12 m6">
					<div className="card darken-1">
						<div className="app card-content">
							<blockquote>
								<span className="card-title">ToDo app</span>
							</blockquote>
							<div style={{ margin: 20 }} />
							<AddItem
								onInputChange={this.handleInputChange}
								value={this.state.newItem}
								onNewInput={this.handleNewInput}
							/>
							<DisplayItems
								list={this.state.itemLists}
								onRemove={this.handleRemoveItem}
								onCompletion={this.handleCompletedItem}
							/>
							{isCompleted ? (
								<DisplayCompletedItems
									list={this.state.completedLists}
								/>
							) : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
