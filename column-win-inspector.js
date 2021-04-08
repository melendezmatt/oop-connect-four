import { Column } from "./column.js";

export class ColumnWinInspector {
    constructor() {
        this.column = Column
    }

    inspect() {
        for (let i = 0; i < this.column.length - 4; i++) {
            if (this.column[i] === this.column[i+1] && this.column[i+1] === this.column[i+2] && this.column[i+2] === this.column[i+3] && this.column[i] === 1) {
                console.log('black win')
                return 1;
            } else if (this.column[i] === this.column[i+1] && this.column[i+1] === this.column[i+2] && this.column[i+2] === this.column[i+3] && this.column[i] === 2) {
                console.log('red win')
                return 2;
            } else {
                return 0;
            }
        }
    }
}
