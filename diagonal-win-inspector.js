export class DiagonalWinInspector {
    constructor(columns) {
        this.columns = columns;

    }
    inspect() {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
            const tokenOne = this.columns[0].getTokenAt(rowIndex);
            const tokenTwo = this.columns[1].getTokenAt(rowIndex + 1);
            const tokenThree = this.columns[2].getTokenAt(rowIndex + 2);
            const tokenFour = this.columns[3].getTokenAt(rowIndex + 3);

            const tokenFive = this.columns[0].getTokenAt(rowIndex);
            const tokenSix = this.columns[1].getTokenAt(rowIndex - 1);
            const tokenSeven = this.columns[2].getTokenAt(rowIndex - 2);
            const tokenEight = this.columns[3].getTokenAt(rowIndex - 3);

            if (tokenOne === tokenTwo && tokenTwo === tokenThree && tokenThree === tokenFour && tokenOne !== null) {
                return tokenOne;
            } else if (tokenFive === tokenSix && tokenSix === tokenSeven && tokenSeven === tokenEight && tokenFive !== null) {
                return tokenFive;
            }

        }
        return 0;
    }
}
