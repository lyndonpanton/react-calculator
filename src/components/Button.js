import React from "react";

const Button = (props) => {
	return (
		<button onChange={props.handleClick}>{props.icon}</button>
	);
};

export default Button;