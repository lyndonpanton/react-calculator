import React from "react";
import Header from "./Header";
import Warning from "./Warning";
import Calculator from "./Calculator";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: "Ok",
			name: "React Calculator"
		};
	}

	render() {
		const { error, name } = this.state;

		const appStyling = {
			paddingBottom: "10px",
			backgroundColor: "#454545",
			color: "#FFFFFF"
		};

		return (
			<div className="app" style={appStyling}>
				<header>
					<Header name={name} />
					<Warning error={error}/>
					<Calculator error={error}/>
				</header>
			</div>
		);
	}
}

export default App;