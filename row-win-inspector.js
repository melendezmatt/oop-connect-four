
export class RowWinInspector {
    constructor(columns) {
        this.columns = columns;

    }
    inspect() {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
            const tokenOne = this.columns[0].getTokenAt(rowIndex);
            const tokenTwo = this.columns[1].getTokenAt(rowIndex);
            const tokenThree = this.columns[2].getTokenAt(rowIndex);
            const tokenFour = this.columns[3].getTokenAt(rowIndex);

            if (tokenOne === tokenTwo && tokenTwo === tokenThree && tokenThree === tokenFour && tokenOne !== null) {
                return tokenOne;
            }
        }
        return 0;
    }
}
