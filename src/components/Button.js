import React from "react";

const Button = (props) => {
	const { buttonKey, icon, handleClick } = props;

	const buttonStyling = {
		borderRadius: "2px",
		width: "48px",
		height: "40px",
		backgroundColor: "#DDDDDD",
		fontFamily: "Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif",
		fontSize: "1.5em",
		color: "#222222"
	};

	return (
		<button key={buttonKey} style={buttonStyling} onChange={handleClick}>{icon}</button>
	);
};

export default Button;