import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
	render() {
		//console.log(this.props);
		return (
			<div>
				<h1>Edit Expense</h1>
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={(expense) => {
						this.props.editExpense(this.props.expense.id, expense);
						this.props.history.push("/");
					}}
				/>
				<button
					onClick={() => {
						this.props.removeExpense({ id: this.props.expense.id });
						this.props.history.push("/");
					}}
				>
					Remove
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => {
			return expense.id === props.match.params.id;
		}),
	};
};

const mapDispatchToPops = {
	editExpense,
	removeExpense,
};

export default connect(mapStateToProps, mapDispatchToPops)(EditExpensePage);
 