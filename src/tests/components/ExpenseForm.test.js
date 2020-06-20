import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";

test("should set note on text area change", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: {
			value: "New Note Text",
		},
    });
    expect(wrapper.state('note')).toBe('New Note Text');
});
