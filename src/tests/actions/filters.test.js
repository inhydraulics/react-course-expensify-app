import moment from "moment";
import {
	setStartDate,
	setEndDate,
	sortByDate,
	sortByAmount,
	setTextFilter,
} from "../../actions/filters";

test("shoudl generate set start date action object", () => {
	const date = moment();
	const action = setStartDate(date);
	expect(action).toEqual({
		type: "SET_START_DATE",
		date,
	});
});

test("should generate set end date action object", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		date: moment(0),
	});
});

test("should generate sort by date action object", () => {
	const action = sortByDate();
	expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate sort by amount action object", () => {
	const action = sortByAmount();
	expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});

test("should generate set text filter action object", () => {
	const action = setTextFilter("some text");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "some text",
	});
});

test("should generate set text filter default action object", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "",
	});
});
