export class Aptitude{
    fullName:string;
    shortHand: string;
    rating: number;
    associatedPool: string;

    constructor(name:string, rating:number){
        this.fullName = name;
        this.shortHand = name.slice(0,3);
        this.rating = rating;
    }
}