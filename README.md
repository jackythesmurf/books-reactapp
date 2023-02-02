# books-reactapp
This is a fun and interactive books search web app, that sources books from google books API. 
<img src="screenshots/Screen Shot 2023-02-02 at 11.53.48 pm.png">

## Intro
This book search app has a landing page containing my recommended books, and upon the user's first search input, it transports them to the main page.
On the main page, it showcases all the matching books from the search result. 
The user is able to select how many books per search, and when clicking a title, a larger model will display, 
and reveal more information about the specific book.

## How its built

This React web application utilises the Framer Motion library to animate transitions and user interactivity. 
I have adhered clearfully to breaking up components as to ensure reusability of code across production.
React hooks control and optimises for the website's performance and rendering across search results.

## Difficulties and What I learnt
In this React project I learnt ideally that each seperate logic or functionality should be broken into components.
And when writing React Hooks like useStates it is better to reassess if its required.
A lot of code repetition did exist because of a lack of proper structure before implementing the React app.
Therefore for future projects and developments I will draw a diagram demonstrating the flow and execution of components and states as to
optimise for the best coding practice before producing code.

## Features

- a landing page showcasing book recommendations
- A Search form that request books from the Google books API using the input value as your query string
- The books rendered in a grid.
- When a user clicks a book in the grid, a modal should appear with more book information.
- Various animation for each user interactivity using Framer Motion a React library

## Further Developments
Future development of this project will heavily emphasis refactoring the existing code, by simplified and breaking code into small components.




>>>>>>> 81a3b5d8c5cf4698ff129bfba778f6fc4067e085
