# ButtonBlitz Game
## Overview
ButtonBlitz is a simple web-based game that challenges players to click on buttons in the correct order. The game dynamically generates colored buttons and shuffles them on the screen. Players must click on the buttons in ascending order to win the game.

# Development
Here's the hosted link : https://buttonblitz-94crprgf8-gurtejs-projects.vercel.app/

# Project Structure
css/style.css: Contains the styles for the game interface.
js/script.js: Implements the game logic using JavaScript.
lang/messages/en/user.js: Stores language-specific messages for the game.
index.html: The main HTML file that includes the game interface and scripts.

# How to Play
Open index.html in a web browser.
Enter the number of buttons you want to play with (between 3 and 7) and click the "Go" button.
Buttons will be generated, and after a brief delay, they will be shuffled on the screen.
Click on the buttons in ascending order (starting from 1) to win the game.
If you click on the wrong button, the correct order will be briefly revealed.

# Game Logic
The Button class creates individual buttons with specified colors, sizes, and orders.
The Game class manages the overall game state, including button creation, shuffling, and handling player clicks.
The GameDriver class acts as a driver to start and reset the game based on user input.
