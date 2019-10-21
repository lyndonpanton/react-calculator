import React from "react";
import Header from "./Header";
import Warning from "./Warning";
import Calculator from "./Calculator";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: "Ok",
			name: "React Calculator"
		};
	}

	changeError = (message) => {
		this.setState({
			error: message
		});
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
					<Warning error={error} />
					<Calculator error={error} changeError={this.changeError}/>
					<Footer />
				</header>
			</div>
		);
	}
}

export default App;