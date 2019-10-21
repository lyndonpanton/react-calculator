import React from "react";

const Header = (props) => {
	const { name } = props;

	const headerStyling = {
		backgroundColor: "#800080"
	};

	const h1Styling = {
		margin: "0",
		padding: "8px",
		textAlign: "center"
	};

	return (
		<header style={headerStyling}>
			<h1 style={h1Styling}>{name}</h1>
		</header>
	);
};

export default Header;