import React from "react";

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

		return (
			<div className="buttons" style={buttonsStyling}>

			</div>
		);
	}
}

export default Buttons;