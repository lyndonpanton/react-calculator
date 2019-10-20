import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			icons: ["mc", "m+", "m-", "mr",
				"c", "/", "x", "<=",
				"7", "8", "9", "-",
				"4", "5", "6", "+",
				"1", "2", "3", "^",
				"%", "0", ".", "="
			]
		};
	}

	render() {
		const calculatorStyling = {
			border: "#FF8200 solid 3px",
			borderRadius: "3px",
			width: "250px",
			height: "400px",
			backgroundColor: "#1A1A1A"
		};

		return (
			<div className="calculator" style={calculatorStyling}>
				<Display />
				<Buttons />
			</div>
		);
	}
}

export default Calculator;