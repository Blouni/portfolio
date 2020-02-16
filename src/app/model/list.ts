import { Card } from './card';

export class List {
    constructor(){
        this.cardList = new Array<Card>();
    }
    title: string;
    cardList: Array<Card>;
}