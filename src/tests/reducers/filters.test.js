import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default initial state", () => {
	const state = filtersReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual({
		text: "",
		sortBy: "date", //'date' or 'amount'
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month"),
	});
});
