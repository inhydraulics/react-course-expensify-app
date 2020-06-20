import { createStore } from "redux";

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + action.incrementBy };
		case "SET_COUNT":
			return { count: action.payload };
		default:
			return state;
	}
};

const store = createStore(countReducer);

store.subscribe(() => {
	console.log("state", store.getState());
});

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	incrementBy,
});

const setCount = (value) => ({
	type: "SET_COUNT",
	payload: value,
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 45 }));
store.dispatch(setCount(15));

//const setCount
console.log(incrementCount());
console.log(incrementCount({ incrementBy: 9 }));
