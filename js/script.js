import Messages from "../lang/messages/en/user.js";
 
/**
 * Button class.
 */
class Button {
    constructor(color, width, height, order) { 
        this.order = order;
        this.btn = document.createElement('button');
        this.btn.innerText = order.toString();
        this.btn.setAttribute('id', `button_${order}`);
        this.btn.style.backgroundColor = color;
        this.btn.style.width = width;
        this.btn.style.height = height;
        this.setLocation = function(top, left) {
            this.btn.style.top = top;
            this.btn.style.left = left; 
        }
    }
}

/**
 * Game class.
 */
class Game {
    constructor(numBtns) {
        this.numBtns = numBtns;
        this.buttonArray = [];
        this.expectedOrder = 1;
    }

    resetGame() {
        for (let i = 1; i <= this.numBtns; i++) {
            const element = document.getElementById(`button_${i}`);
            if (element) { element.remove(); }
        }
        this.buttonArray = [];
    }

    /**
     * ChatGPT was used to complete this function.
     */
    createButtons() {
        for (let i = 1; i <= this.numBtns; i++) { 
            const button = new Button (this.getRandomColor(), '10em', '5em', i);
            button.setLocation(0, (i - 1) * 15);
            const buttonContainer = document.getElementById('button-container');
            buttonContainer.appendChild(button.btn);
            this.buttonArray.push(button);
        }
    }

    /**
     * Function to shuffle the buttons.
     * ChatGPT was used to complete this function.
     */
    shuffleButtons(numIterations) {
        const buttonCountainer = document.getElementById('button-container');
        buttonCountainer.style.display = 'block';

        let numShuffles = 0;
        
        let myInterval = setInterval(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const buttonWidth = this.buttonArray[0].btn.offsetWidth; 
        const buttonHeight = this.buttonArray[0].btn.offsetHeight;
            // terminating condition
            numShuffles++;
            if (numShuffles >= numIterations) {
                this.enableButtons();
                clearInterval(myInterval);
            }

            //  shuffle the buttons on screen
            for (let i = 0; i < this.numBtns; i++) {
                this.buttonArray[i].btn.style.position = 'absolute';
                this.buttonArray[i].setLocation(
                    Math.floor(Math.random() * (windowHeight - buttonHeight)) + 'px', 
                    Math.floor(Math.random() * (windowWidth - buttonWidth)) + 'px' );
            }
        }, 2000);
    }

    getRandomColor() { 
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    enableButtons() {
        for (let i = 0; i < this.buttonArray.length; i++) {
            this.buttonArray[i].btn.innerText = "";
            this.buttonArray[i].btn.addEventListener("click", () => this.handleButtonClick(this.buttonArray[i].order));
        }
    }

    handleButtonClick(clickedOrder) {
        const button = this.buttonArray.find(btn => btn.order === this.expectedOrder);
        if (button && clickedOrder === this.expectedOrder) {
            // Correct order
            this.confirmOrder(button);
            this.expectedOrder++;

            // Check if the user has clicked all buttons in the correct order
            if (this.expectedOrder > this.numBtns) {
                setTimeout(() => alert(Messages.CORRECT_ORDER_MESSAGE), 500);
            }
        } else {
            // Wrong order
            this.revealCorrectOrder();
            setTimeout(() => alert(Messages.INCORRECT_ORDER_MESSAGE), 500);
        }
    }

    confirmOrder(button) {
        button.btn.innerText = button.order;
    }

    revealCorrectOrder() {
        for (const button of this.buttonArray) {
            button.btn.innerText = button.order;
        }
    }
}

/**
 * Game driver class.
 */
class GameDriver {
    constructor(numBtns) {
        this.numBtns = numBtns;
        this.game = new Game(numBtns);
    }

    validateInput() {
        if (isNaN(this.numBtns) || this.numBtns < 3 || this.numBtns > 7) {
            alert(Messages.INVALID_INPUT_MESSAGE);
            return false;
        }
        return true;
    }

    startGame() {
        this.game.resetGame();
        this.game.createButtons();
        setTimeout(this.game.shuffleButtons(this.numBtns), (this.numBtns - 2) * 1000);
    }
}

/**
 * Script code for supporting the game.
 */

// add label to input field
const numBtnsLabel = document.getElementById('numBtnsLabel');
numBtnsLabel.textContent = Messages.INPUT_MESSAGE;

// add event listener to 'Go' button
document.getElementById('goButton').addEventListener('click', function () {
    const numButtons = document.getElementById('numBtns').value;
    const gameDriver = new GameDriver(numButtons);
    
    if (!gameDriver.validateInput()) { return; }
    gameDriver.startGame();
});
