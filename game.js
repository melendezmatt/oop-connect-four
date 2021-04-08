import {Column} from "./column.js"

export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currPlayer = 1;
        this.columns = [new Column(),new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
    }

    getName() {
        return `${this.name1} vs. ${this.name2}`
    }

    playInColumn(index) {
        this.columns[index].add(this.currPlayer)
        if (this.currPlayer === 1) {
            this.currPlayer = 2;
        } else {
            this.currPlayer = 1;
        }
    }

    getTokenAt(row, column) {
        return this.columns[column].getTokenAt(row)
    }
}
