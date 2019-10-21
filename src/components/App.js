import React from "react";
import Header from "./Header";
import Calculator from "./Calculator";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "React Calculator"
		};
	}

	render() {
		const { name } = this.state;

		return (
			<div className="app">
				<header>
					<Header name={name} />
					<Calculator />
				</header>
			</div>
		);
	}
}

export default App;