// const person = {
// 	name: "Sergiy",
// 	age: 42,
// };

// console.log("Testing More");
// console.log(`${person.name} is ${person.age} years old`);

// const book = {
// 	title: "Book title",
// 	author: "An Auhtor",
// 	publisher: {
// 		// name: "Penguin",
// 	},
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const item = ['Coffee (hot)', '2.00', '2.50', '2.75'];
const [name, , price] = item;

console.log(`A medium ${name} costs ${price}`);
