import React from "react";

const Warning = (props) => {
	let backgrounColor;
	let borderColor;

	if (props.error === "Ok") {
		backgrounColor = "#088808";
		borderColor = "#00CCCC";
	} else {
		backgrounColor = "#CC0000";
		borderColor = "#FFAA44";
	}

	const warningStyling = {
		margin: "20px auto",
		border: borderColor + " solid 2px",
		borderRadius: "4px",
		padding: 0,
		backgroundColor: backgrounColor,
		width: "250px",
		textAlign: "center"
	};

	const textStyling = {
		margin: "10px 0 2px",
		padding: 0,
	};

	return (
		<div className="warning" style={warningStyling}>
			<p style={textStyling}>{props.error}</p>
		</div>
	);
};

export default Warning;