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

		const appStyling = {
			paddingBottom: "10px",
			backgroundColor: "#454545",
			color: "#FFFFFF"
		};

		return (
			<div className="app" style={appStyling}>
				<header>
					<Header name={name} />
					<Calculator />
				</header>
			</div>
		);
	}
}

export default App;