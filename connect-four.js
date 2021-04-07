import { Game } from "./game.js"

let game = undefined;
function updateUI() {
    const boardHolder = getElementById("board-holder")
    const gameName = getElementById("game-name")
    if (game === 'undefined') {
        boardHolder.addAttribute("is-invisible")
    } else {
        boardHolder.removeAttribute("is-invisible")
        gameName.innerHTML = getName()
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const playerOneInput = document.getElementById("player-1-name")
    const playerTwoInput = document.getElementById("player-2-name")
    const newGameButton = document.getElementById("new-game")
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
        const gameName = getElementById("game-name")
        game = new Game(playerOneInput.value, playerTwoInput.value);
        playerOneInput.value = '';
        playerTwoInput.value = '';
        newGameButton.disabled = true;
        // console.log(boardHolder)
        // updateUI();
        // console.log(boardHolder)
    })

});
