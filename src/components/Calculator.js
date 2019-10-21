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
		const { changeError } = this.props;

		let value = String(this.state.value);
		const memory = this.state.memory;

		switch(icon) {
			case "mc":
				this.setState({
					memory: 0
				});

				changeError("Ok");
				break;
			case "m+":
				if (isNaN(value[value.length - 1])) {
					changeError("equation must end in a number");;
				} else {
					this.setState({
						memory: memory + eval(value)
					});

					changeError("Ok");
				}
				break;
			case "m-":
				if (isNaN(value[value.length - 1])) {
					changeError("equation must end in a number");
				} else {
					this.setState({
						memory: memory - eval(value)
					});
					
					changeError("Ok");
				}
				break;
			case "mr":
				this.setState({
					value: memory
				});
				
				changeError("Ok");
				break;
			case "c":
				this.setState({
					value: ""
				});
				
				changeError("Ok");
				break;
			case "/":
			case "x":
			case "-":
			case "+":
			case "^":
			case "%":
				if (value === "") {
					changeError("eqautions must start with a number");
				} else if (isNaN(value[value.length - 1])) {
					changeError("eqautions must not have two consecutive operands");
				} else {
					this.setState({
						value: value + icon
					});
					
					changeError("Ok");
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

				changeError("Ok");
				break;
			case "<=":
				this.setState({
					value: value.slice(0, value.length - 1)
				});
				break;
			case ".":
				if (isNaN(value[value.length - 1])) {
					changeError("decimal point can only be added after a number");
				} else {
					this.setState({
						value: value + icon
					});

					changeError("Ok");
				}
				break;
			case "=":
				if (isNaN(value[value.length - 1])) {
					changeError("equation must end in a number");
				} else {
					value = value.replace("x", "*").replace("^", "**");

					this.setState({
						value: eval(value)
					});

					changeError("Ok");
				}
				break;
			default:
				changeError("button not recognised");
		}
	}

	render() {
		const calculatorStyling = {
			margin: "20px auto",
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