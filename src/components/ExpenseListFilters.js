import "react-dates/initialize";
import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = (calendarFocused) => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={this.props.filters.text}
					onChange={(e) => {
						this.props.dispatch(setTextFilter(e.target.value));
					}}
				/>
				<select
					name=""
					id=""
					value={this.props.filters.sortBy}
					onChange={(e) => {
						const sortBy = e.target.value;
						if (sortBy === "date") {
							this.props.dispatch(sortByDate());
						} else if (sortBy === "amount") {
							this.props.dispatch(sortByAmount());
						}
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					startDateId="First Day of the Month"
					endDateId="Last Day of the Month"
					numberOfMonths={1}
					isOutsideRange={() => false}
					showClearDates
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
