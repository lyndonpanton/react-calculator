import React from "react";

const Button = (props) => {
	const { buttonKey, icon, handleClick } = props;

	return (
		<button key={buttonKey} onChange={handleClick}>{icon}</button>
	);
};

export default Button;