import React from "react";
import Calculator from "./Calculator";

class App extends React.Component {
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