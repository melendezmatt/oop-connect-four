export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currPlayer = 1;
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`
    }

    playInColumn() {
        if (this.currPlayer === 1) {
            this.currPlayer = 2;
        } else {
            this.currPlayer = 1;
        }
    }
}
