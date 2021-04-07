import { Game } from "./game.js"

let game;

window.addEventListener("DOMContentLoaded", (event) => {

    const playerOneInput = document.getElementById("player-1-name")
    const playerTwoInput = document.getElementById("player-2-name")

    playerOneInput.addEventListener("keyup", (event) => {
        const newGame = document.getElementById("new-game")
        if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
            // newGame.removeAttribute("disabled");
            newGame.disabled = "false";
    });

    playerTwoInput.addEventListener("keyup", (event) => {
        const newGame = document.getElementById("new-game")
        if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
            // newGame.removeAttribute("disabled");
            newGame.disabled = "false";
    });

})
