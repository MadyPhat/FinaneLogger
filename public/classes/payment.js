export class payment {
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} pound for ${this.detail}`;
    }
}
