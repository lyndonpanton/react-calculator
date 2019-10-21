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
			],
			memory: 0,
			value: "",
		};
	}

	handleClick = (icon) => {
		let value = String(this.state.value);
		const memory = this.state.memory;

		switch(icon) {
			case "mc":
				this.setState({
					memory: 0
				});
				break;
			case "m+":
				if (isNaN(value[value.length - 1])) {
					// error logic
					console.log("equation must end in a number");;
				} else {
					this.setState({
						memory: memory + eval(value)
					});
				}
				break;
			case "m-":
				if (isNaN(value[value.length - 1])) {
					// error logic
					console.log("equation must end in a number");
				} else {
					this.setState({
						memory: memory - eval(value)
					});
				}
				break;
			case "mr":
				this.setState({
					value: memory
				});
				break;
			case "c":
				this.setState({
					value: ""
				});
				break;
			case "/":
			case "x":
			case "-":
			case "+":
			case "^":
			case "%":
				if (isNaN(value[value.length - 1])) {
					// error logic
					console.log("eqautions must not have two consecutive operands");
				} else {
					this.setState({
						value: value + icon
					});
				}
				break;
			case "7":
			case "8":
			case "9":
			case "4":
			case "5":
			case "6":
			case "1":
			case "2":
			case "3":
			case "0":
				this.setState({
					value: value + icon
				});
				break;
			case "<=":
				this.setState({
					value: value.slice(0, value.length - 1)
				});
				break;
			case "=":
				if (isNaN(value[value.length - 1])) {
					// error logic
					console.log("equation must end in a number");
				} else {
					value = value.replace("x", "*").replace("^", "**");

					this.setState({
						value: eval(value)
					});
				}
				break;
			default:
				console.log("button not recognised");
		}
	}

	render() {
		const calculatorStyling = {
			margin: "0 auto",
			border: "#FF8200 solid 3px",
			borderRadius: "3px",
			width: "250px",
			height: "400px",
			backgroundColor: "#1A1A1A"
		};

		const { icons, value } = this.state;

		return (
			<div className="calculator" style={calculatorStyling}>
				<Display icons={icons} value={value} />
				<Buttons icons={icons} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default Calculator;