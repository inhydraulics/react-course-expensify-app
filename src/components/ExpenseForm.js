import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

//const now = moment();
//console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? (props.expense.amount / 100).toString() : "",
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: "",
		};
	}

	onDescriptionChange = (e) => {
		//console.log(e);
		const description = e.target.value;
		this.setState(() => {
			return { description };
		});
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		if (!this.state.amount || !this.state.description) {
			this.setState(() => ({
				error: "Please, provide description and amount",
			}));
		} else {
			this.resetError();
			const { description, createdAt, note, amount } = this.state;
			this.props.onSubmit({
				description,
				createdAt: createdAt.valueOf(),
				note,
				amount: parseFloat(amount, 10) * 100,
			});
		}
	};

	resetError = () => {
		this.setState(() => ({ error: "" }));
	};

	render() {
		return (
			<div>
				{this.state.error && <h2>{this.state.error}</h2>}
				<form onSubmit={this.onFormSubmit}>
					<input
						type="text"
						placeholder="Desciption"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
						onFocus={this.resetError}
					/>
					<input
						type="text"
						value={this.state.amount}
						placeholder="Amount"
						name=""
						id=""
						onChange={this.onAmountChange}
						onFocus={this.resetError}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						placeholder="Add your note here  (optional)"
						value={this.state.note}
						onChange={this.onNoteChange}
					></textarea>
					<button>Add Expense</button>
				</form>
			</div>
		);
	}
}
 