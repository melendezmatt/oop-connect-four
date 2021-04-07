export class Column {
    constructor(){
        this.tokens = [null,null,null,null,null, null]
    }

    add(token) {
        for (let i = this.tokens.length - 1; i >= 0; i--) {
            if (this.tokens[i] === null) {
                this.tokens[i] = token;
                return
            }
        }
    }

    getTokenAt(row) {
        return this.tokens[row]
    }
}
