// import { v4 as uuid } from "uuid";
import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup removeExpense action object", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc",
	});
});

const dataObject = { note: "New Note Value" };

test("should setup editExpense action object", () => {
	const action = editExpense("123ab", dataObject);
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123ab",
		dataObj: { note: "New Note Value" },
	});
});

test("should setup add expense action object", () => {
	const expenseData = {
		description: "some description",
		note: "some note",
		amount: 1234,
		createdAt: 4567,
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});

test("should setup add expense action object with default values", () => {
	const action = addExpense();
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			id: expect.any(String),
			description: "",
			note: "",
			amount: 0,
			createdAt: 0,
		},
	});
});
