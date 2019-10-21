import React from "react";
import Header from "./Header";
import Warning from "./Warning";
import Calculator from "./Calculator";
import Footer from "./Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			author: "Lyndon Panton",
			copyright: "All Rights Reserved",
			date: (new Date()).getFullYear(),
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
		const { author, copyright, date, error, name } = this.state;

		const appStyling = {
			color: "#FFFFFF"
		};

		const mainStyling = {
			padding: "15px 0",
			backgroundColor: "#454545"
		};

		return (
			<div className="app" style={appStyling}>
				<header>
					<Header name={name} />
					<main style={mainStyling}>
						<Warning error={error} />
						<Calculator error={error} changeError={this.changeError}/>
					</main>
					<Footer author={author} copyright={copyright} date={date} />
				</header>
			</div>
		);
	}
}

export default App;