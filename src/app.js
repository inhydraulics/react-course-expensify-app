import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount, sortByDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";


const store = configureStore();

store.subscribe(() => {
	const state = store.getState();
});

store.dispatch(
	addExpense({
		description: "Water Bill",
		amount: 100,
		createdAt: 150,
	})
);

store.dispatch(
	addExpense({
		description: "Gas Bill",
		amount: 80,
		createdAt: 250,
	})
);

store.dispatch(
	addExpense({
		description: "Rent",
		amount: 8000,
		createdAt: 100,
	})
);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
