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
					<Footer author={author} copyright={copyright} date={date} />
				</header>
			</div>
		);
	}
}

export default App;