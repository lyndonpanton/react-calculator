import React from "react";

const Warning = (props) => {


	const warningStyling = {
		margin: "20px auto",
		border: "#AADDFF solid 2px",
		borderRadius: "4px",
		padding: 0,
		backgroundColor: "#323232",
		width: "250px",
		textAlign: "center"
	};

	const textStyling = {
		margin: "10px 0 2px",
		padding: 0,
	};

	return (
		<div className="warning" style={warningStyling}>
			<p style={textStyling}>Ok</p>
		</div>
	);
};

export default Warning;