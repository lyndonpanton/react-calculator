import React from "react";
import Calculator from "./Calculator";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	render() {
		return (
			<div className="app">
				<header>
					<h1>React Calculator</h1>
					<Calculator />
				</header>
			</div>
		);
	}
}

export default App;