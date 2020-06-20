import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
	return (
		<div>
			<h1>Information</h1>
			<p>{`The info is: ${props.info}`}</p>
		</div>
	);
};

//requireAuthentication

const requireAuthentication = (WrappedComponent) => {
	return (props) => {
		return (
			<div>
				{!(props.isAuthenticated) && <p>Please Authenticate!</p>}
				<WrappedComponent {...props} />
			</div>
		);
	};
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<Info info="Some Info" />, document.getElementById("app"));
ReactDOM.render(
	<AuthInfo isAuthenticated={false} info="Some More Info" />,
	document.getElementById("app")
);
