import React from "react";
import Header from "./Header";
import Calculator from "./Calculator";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<header>
					<Header />
					<Calculator />
				</header>
			</div>
		);
	}
}

export default App;