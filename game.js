import {Column} from "./column.js"
import { ColumnWinInspector } from "./column-win-inspector.js"

export class Game {
    constructor(name1, name2) {
        this.name1 = name1;
        this.name2 = name2;
        this.currPlayer = 1;
        this.winnerNumber = 0;
        this.columns = [new Column(),new Column(), new Column(), new Column(), new Column(), new Column(), new Column()]
    }

    getName() {
        if (this.winnerNumber === 1) {
            return `${this.name1.toUpperCase()} Wins!`
        }  else if (this.winnerNumber === 2) {
            return `${this.name2.toUpperCase()} Wins!`
        } else if (this.winnerNumber === 3) {
            return `${this.name1.toUpperCase()} TIES WITH ${this.name2.toUpperCase()}`
        }
        else {
            return `${this.name1.toUpperCase()} VS. ${this.name2.toUpperCase()}`
        }
    }

    playInColumn(index) {
        this.columns[index].add(this.currPlayer)
        if (this.currPlayer === 1) {
            this.currPlayer = 2;
        } else {
            this.currPlayer = 1;
        }
        this.checkForTie();
        this.checkForColumnWin();
    }

    getTokenAt(row, column) {
        return this.columns[column].getTokenAt(row)
    }

    isColumnFull(index) {
        return this.columns[index].isFull();
    }

    checkForTie() {
        if (this.columns.every((column, index) => this.isColumnFull(index))) {
            this.winnerNumber = 3;
        }
    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return
        }
        this.columns.forEach(column => {
            let currColumn = new ColumnWinInspector(column)
            if (currColumn.inspect() === 1) {
                this.winnerNumber = 1
            } else if (currColumn.inspect() === 2) {
                this.winnerNumber = 2
            }
        })
    }
}
