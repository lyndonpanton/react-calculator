import React from "react";

const Display = (props) => {
	const displayStyling = {
		margin: "20px auto",
		border: "#000000 solid 2px",
		borderRadius: "3px",
		width: "90%",
		height: "50px",
		backgroundColor: "#225522"
	};

	const outputStyling = {
		display: "block",
		overflowX: "scroll",
		padding: "0 5px",
		textAlign: "right",
		fontFamily: "monospace",
		fontSize: "3.3em",
		color: "#EEEEEE"
	};

	return (
		<div className="display" style={displayStyling}>
			<output style={outputStyling}></output>
		</div>
	);
};

export default Display;