const initialExpensesState = [];

const expensesReducer = (state = initialExpensesState, action) => {
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

export default expensesReducer;
