import React from "react";
import ReactLogo from "./assets/react.svg?react";

export const CopyApp = () => {
	return React.createElement(
		'div',
		 null ,
		React.createElement('h1', null, 'Hello World!'),
		React.createElement(ReactLogo, null)
	);
};
