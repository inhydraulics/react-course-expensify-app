import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render ExpenseListItem", () => {
	const wrapper = shallow(
		<ExpenseListItem
			description={expenses[0].description}
			amount={expenses[0].amount}
            createdAt={expenses[0].createdAt}
            id={expenses[0].id}
		/>
	);
	expect(wrapper).toMatchSnapshot();
});
