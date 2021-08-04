// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson ={
//     name: 'Mady',
//     age: 21,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log(spend);
//         return amount;
//     }
// };
// const greetPerson = (person: IsPerson) => {
//     console.log('Hello ', person.name);
// }
// greetPerson(me);


import { invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/listTemplate.js';
import { payment } from './classes/payment.js';
import {HasFormatter} from './interface/hasformatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// let docs: HasFormatter[]=[];

// docOne = new invoice('Camara','Jumping',33);
// docTwo = new payment('Vedeoy','sitting',400);

// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// const invOne = new invoice('Madacaska','running',2);
// const invTwo = new invoice('Hilda','hidding',300);

// let invoices : invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.detail, inv.format());
// });


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List Ul
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    let doc : HasFormatter;

    let loggerResult : [string, string, number];
    loggerResult = [tofrom.value, details.value, amount.valueAsNumber]
    if(type.value === 'invoice'){
        doc = new invoice(...loggerResult);
    }else{
        doc = new payment(...loggerResult);
    }
    list.render(doc, type.value, 'end')
});

// const addUID = <T extends {name:string}>(obj: object) => {
//     let uid = Math.floor(Math.random()* 100);
//     return{...obj, uid};
// }
// let doc = addUID({name: 'karie', age: 20});
// console.log(doc)

// enum resourceType {'BOOK', 'PEN', 'WATER'}
// interface Resource <T>{
//     uid : number;
//     resourceName: resourceType;
//     data: T
// }

// const docThree: Resource<string> = {
//     uid : 12,
//     resourceName : resourceType.BOOK,
//     data : 'dara'
// }

// const docFour: Resource<string[]> = {
//     uid : 23,
//     resourceName : resourceType.WATER,
//     data : ['phone','computer','keyboard']
// }

// console.log(docThree, docFour);