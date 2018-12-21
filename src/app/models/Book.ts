export class Book {

    author: string;
    description: string[];
    isLent:boolean;

    constructor(public title: string){
        this.isLent = false;
    }
}