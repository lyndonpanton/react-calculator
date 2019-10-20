import React from "react";
import Button from "./Button";

class Buttons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const buttonsStyling = {
			margin: "0 auto",
			border: "#FF8A00 solid 1px",
			borderRadius: "3px",
			width: "90%",
			height: "280px",
		};

		const buttons = this.props.icons.map((icon, index) => {
			return (
				<Button key={index} icon={icon} handleClick={() => 0} />
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