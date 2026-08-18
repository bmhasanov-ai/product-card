import { comments } from "./comments.js";

// Задание 2.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shortNumbers = numbers.filter(num => num >= 5);

// Задание 3.

const films = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Godfather",
  "Pulp Fiction"
]

const isFantasticFilm = films.includes("The Matrix");

// Задание 4.

function reverseArray(array) {
  array.reverse();
}

reverseArray(numbers);
reverseArray(films);


// Задание 7.

const comEmails = comments.filter(comment => comment.email.includes(".com"));

// Задание 8.

const newIdComments = comments.map(comment => { comment.id <= 5 ? comment.postId = 2 : comment.postId = 1; return comment; })


// Задание 9.

const shortComments = comments.map(comment => {
  return { id: comment.id, name: comment.name }
})

// Задание 10.

const newComments = comments.map(comment => { comment.body.length > 180 ? comment.isInvalid = true : comment.isInvalid = false; return comment; })

// Задание 11.

const emailsArray = comments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);

const emailsArray2 = comments.map(comment => comment.email);

// Задание 12.

const stringComments = emailsArray.join(" | ");
const stringComments2 = emailsArray.toString();

