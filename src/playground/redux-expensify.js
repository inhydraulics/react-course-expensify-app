import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createdAt = 0,
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});

//REMOVE_EXPENSE
const removeExpense = ({ id = "" } = {}) => {
	return {
		type: "REMOVE_EXPENSE",
		id,
	};
};

//EDIT_EXPENSE
const editExpense = (id, dataObj = {}) => ({
	type: "EDIT_EXPENSE",
	id,
	dataObj,
});

//SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text,
});

const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT",
});

const sortByDate = () => ({
	type: "SORT_BY_DATE",
});

const setStartDate = (date) => ({
	type: "SET_START_DATE",
	date,
});

const setEndDate = (date) => ({
	type: "SET_END_DATE",
	date,
});

//Expenses reducer

const initialExpensesState = [];

const expenesReducer = (state = initialExpensesState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			return state.filter((el) => el.id !== action.id);
		case "EDIT_EXPENSE":
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.dataObj,
					};
				}
				return expense;
			});
		default:
			return state;
	}
};

//Filters reducer

const initialFiltersState = {
	text: "",
	sortBy: "date", //'date' or 'amount'
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = initialFiltersState, action) => {
	switch (action.type) {
		case "SET_TEXT_FILTER":
			return {
				...state,
				text: action.text,
			};
		case "SORT_BY_AMOUNT":
			return {
				...state,
				sortBy: "amount",
			};
		case "SORT_BY_DATE":
			return {
				...state,
				sortBy: "date",
			};
		case "SET_START_DATE":
			return {
				...state,
				startDate: action.date,
			};
		case "SET_END_DATE":
			return {
				...state,
				endDate: action.date,
			};
		default:
			return state;
	}
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch =
				typeof startDate !== "number" || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== "number" || expense.createdAt <= startDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());
			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === "date") {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

//Store Creation

const store = createStore(
	combineReducers({
		expenses: expenesReducer,
		filters: filtersReducer,
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleState = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleState);
});

const expenseOne = store.dispatch(
	addExpense({ description: "Rent", amount: 500, createdAt: 10 })
);

//Getting the action object back
//console.log("expenseOne: ", expenseOne);

const ExpenseTwo = store.dispatch(
	addExpense({ description: "Coffee", amount: 100, createdAt: 1000 })
);

store.dispatch(
	addExpense({ description: "Car", amount: 1200, createdAt: -120 })
);

store.dispatch(addExpense({ description: "Gym", amount: 650, createdAt: 350 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(ExpenseTwo.expense.id, { amount: 123 }));
//store.dispatch(setTextFilter("e"));
//store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(500));
// store.dispatch(setEndDate());
