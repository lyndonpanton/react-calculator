import React from "react";

const Footer = (props) => {
	const { author, copyright, date } = props;

	const footerStyling = {
		padding: "10px 0",
		backgroundColor: "#7722FF",
		color: "#FFFFFF"
	};

	const rightsStyling = {
		textAlign: "center"
	};

	return (
		<footer style={footerStyling}>
			<p style={rightsStyling}>&copy; { date } { author } | { copyright }</p>
		</footer>
	);
};

export default Footer;