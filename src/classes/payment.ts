import {HasFormatter} from '../interface/hasformatter.js'

export class payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        readonly detail: string,
        readonly amount: number
    ){
    }

    format(){
        return `${this.recipient} is owed ${this.amount} pound for ${this.detail}`;
    }
}