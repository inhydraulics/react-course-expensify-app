import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

test("should render edit expense page", () => {
	const wrapper = shallow(<EditExpensePage expense={expenses[2]} />);
	expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
	const editExpense = jest.fn();
	const push = jest.fn();
	const wrapper = shallow(
		<EditExpensePage
			expense={expenses[2]}
			editExpense={editExpense}
			history={{ push }}
		/>
	);
	wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
	expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});
