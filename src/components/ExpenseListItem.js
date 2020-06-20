import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = (props) => {
	//console.log(props);
	return (
		<div>
			<Link to={`/edit/${props.id}`}>
				<p>Description: {props.description}</p>
			</Link>
			<p>Amount: {props.amount}</p>
			<p>Created at: {props.createdAt}</p>
		</div>
	);
};

export default ExpenseListItem;
