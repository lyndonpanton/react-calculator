import React from "react";
import Button from "./Button";

class Buttons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const buttonsStyling = {
			"display": "flex",
			"flexDirection": "row",
			"flexWrap": "wrap",
			"justifyContent": "space-around",

			margin: "0 auto",
			border: "#FF8A00 solid 1px",
			borderRadius: "3px",
			padding: "5px 0 0",
			width: "90%",
			height: "280px",
		};

		const buttons = this.props.icons.map((icon, index) => {
			return (
				<Button buttonKey={index} icon={icon} handleClick={() => this.props.handleClick} />
			);
		});

		return (
			<div className="buttons" style={buttonsStyling}>
				{  buttons  }
			</div>
		);
	}
}

export default Buttons;