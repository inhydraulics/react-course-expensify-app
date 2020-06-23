import expensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("testing expensesTotal selector", () => {
	const result = expensesTotal(expenses);
	expect(result).toBe(104690);
});

test("testing expensesTotal selector", () => {
	const result = expensesTotal([]);
	expect(result).toBe(0);
});

test("testing expensesTotal selector", () => {
	const result = expensesTotal([expenses[0]]);
	expect(result).toBe(190);
});

