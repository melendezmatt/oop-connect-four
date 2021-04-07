import { Game } from "./game.js"


window.addEventListener("DOMContentLoaded", (event) => {

    let game = undefined;
    const playerOneInput = document.getElementById("player-1-name")
    const playerTwoInput = document.getElementById("player-2-name")
    const newGameButton = document.getElementById("new-game")

    function enableButton () {
        // console.log(playerOneInput.value.length)
        if (!playerOneInput.value.length || !playerTwoInput.value.length) {
            newGameButton.disabled = false;
        } else {
            newGameButton.disabled = true;
        }
    }

    playerOneInput.addEventListener("change", (event) => {
        enableButton();
    });

    playerTwoInput.addEventListener("change", (event) => {
        enableButton();
    });

    newGameButton.addEventListener('click', e => {
    })
});
