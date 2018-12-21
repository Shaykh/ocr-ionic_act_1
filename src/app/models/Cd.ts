export class Cd {

    artist: string;
    description: string[];
    isLent:boolean;

    constructor(public title) {
        this.isLent = false;
    }
}