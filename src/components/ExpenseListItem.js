import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = (props) => {
	//console.log(props);
	return (
		<div>
			<Link to={`/edit/${props.id}`}>
				<p>Description: {props.description}</p>
			</Link>
			<p>Amount: {numeral(props.amount / 100).format("$0,0.00")}</p>
			<p>Created at: {moment(props.createdAt).format("MMMM Do, YYYY")}</p>
		</div>
	);
};

export default ExpenseListItem;
