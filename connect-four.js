import { Game } from "./game.js"

let game = undefined;

window.addEventListener("DOMContentLoaded", (event) => {
    const playerOneInput = document.getElementById("player-1-name")
    const playerTwoInput = document.getElementById("player-2-name")
    const newGameButton = document.getElementById("new-game")
    const clickTargets = document.getElementById('click-targets')



    function enableButton () {
        if (!playerOneInput.value.length || !playerTwoInput.value.length) {
            newGameButton.disabled = false;
        }
    }

    playerOneInput.addEventListener("change", (event) => {
        enableButton();
    });

    playerTwoInput.addEventListener("change", (event) => {
        enableButton();
    });

    newGameButton.addEventListener("click", (event) => {
        game = new Game(playerOneInput.value, playerTwoInput.value);
        playerOneInput.value = '';
        playerTwoInput.value = '';
        newGameButton.disabled = true;
        updateUI();
    });

    function updateUI() {
        const boardHolder = document.getElementById("board-holder")
        const gameName = document.getElementById("game-name")
        if (game === undefined) {
            boardHolder.setAttribute("is-invisible", true)
        } else {
            boardHolder.removeAttribute("is-invisible")
            gameName.innerHTML = game.getName()

            if (game.currPlayer === 1) {
                clickTargets.classList.remove("red")
                clickTargets.classList.add("black")
            } else {
                clickTargets.classList.remove("black")
                clickTargets.classList.add("red")
            }
    
            for (let row = 0; row < 6; row++) {
                for (let column = 0; column < 7; column++ ) {
                    let square = document.getElementById(`square-${row}-${column}`)
                    square.innerHTML = '';
                    let currVal = game.getTokenAt(row, column)
                    if (currVal === 1) {
                        let tokenBlack = document.createElement('div')
                        tokenBlack.setAttribute("class", "token black")
                        square.appendChild(tokenBlack)
                    } else if (currVal === 2) {
                        let tokenRed = document.createElement('div')
                        tokenRed.setAttribute("class", "token red")
                        square.appendChild(tokenRed)
                    }
                }
            }
        }

    }



    clickTargets.addEventListener('click', event => {
        if (event.target.id.includes('column')) {
            let split = event.target.id.split('-');
            let index = Number.parseInt(split[1]);
            game.playInColumn(index)
            updateUI()
        }

    })

});
