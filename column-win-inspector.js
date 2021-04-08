import { Column } from "./column.js";

export class ColumnWinInspector {
    constructor(currColumn) {
        this.currColumn = currColumn.tokens;
    }

    inspect() {
        for (let i = 0; i < this.currColumn.length - 3; i++) {
            if (this.currColumn[i] !== null && this.currColumn[i] === this.currColumn[i+1] && this.currColumn[i+1] === this.currColumn[i+2] && this.currColumn[i+2] === this.currColumn[i+3]) {
                return this.currColumn[i];
            }
        }
        return 0;
    }
}
