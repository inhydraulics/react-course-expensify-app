import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import expensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";

const ExpensesSummary = (props) => {
	const { expenseCount, expensesTotal } = props;
	return (
		//<p>This Is the Summary</p>

		<div>
			{expenseCount > 0 && (
				<p>
					Viewing
					{` ${expenseCount} ${
						expenseCount === 1 ? "expense" : "expenses"
					} totalling ${numeral(expensesTotal / 100).format("$0,0.00")}`}
				</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	///console.log(state);
	const expenses = selectExpenses(state.expenses, state.filters);
	//console.log(expenses);
	return {
		expenseCount: expenses.length,
		expensesTotal: expensesTotal(expenses),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
