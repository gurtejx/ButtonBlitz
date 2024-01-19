# ButtonBlitz Game
## Overview
ButtonBlitz is a simple web-based game that challenges players to click on buttons in the correct order. The game dynamically generates colored buttons and shuffles them on the screen. Players must click on the buttons in ascending order to win the game.

## Development
Here's the hosted link : https://buttonblitz-94crprgf8-gurtejs-projects.vercel.app/

## Project Structure
css/style.css: Contains the styles for the game interface. <br>
js/script.js: Implements the game logic using JavaScript. <br>
lang/messages/en/user.js: Stores language-specific messages for the game. <br>
index.html: The main HTML file that includes the game interface and scripts. <br>

## How to Play
Open index.html in a web browser. <br>
Enter the number of buttons you want to play with (between 3 and 7) and click the "Go" button. <br>
Buttons will be generated, and after a brief delay, they will be shuffled on the screen. <br>
Click on the buttons in ascending order (starting from 1) to win the game. <br>
If you click on the wrong button, the correct order will be briefly revealed. <br>

## Game Logic
The Button class creates individual buttons with specified colors, sizes, and orders. <br>
The Game class manages the overall game state, including button creation, shuffling, and handling player clicks. <br>
The GameDriver class acts as a driver to start and reset the game based on user input. <br>
