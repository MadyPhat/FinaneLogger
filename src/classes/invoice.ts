import {HasFormatter} from '../interface/hasformatter.js'

export class invoice implements HasFormatter{
    constructor(
        readonly client: string,
        readonly detail: string,
        readonly amount: number
    ){
    }

    format(){
        return `${this.client} owes ${this.amount} pound for ${this.detail}`;
    }
}