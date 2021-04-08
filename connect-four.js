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
        }
    }

    clickTargets.addEventListener('click', e => {
        game.playInColumn();
        updateUI()
    })

});
