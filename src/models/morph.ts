
import { Aptitude } from "./aptitude";

export class Morph{
    name:string;
    movementRate:string;
    
    traits: string;
    notes: string;

    isSynthMorph:boolean;

    durability:number;
    woundThreshold: number;
    deathRating: number;

    insight:number;
    moxie:number;
    vigor: number;
    flex: number;

    cpCost:number;
    creditCost:number;
    availability:number;

    aptitudes: Aptitude[];
    aptitudeMaximum:number;
    ware: string;

    constructor(name:string, isSynthMorph:boolean, ware:string, aptitudeMaximum:number, durability:number, 
                 advantages:string, disadvantages:string, cpCost:number, 
                 creditCost:number , aptitudes:Aptitude[]){
        this.name = name;
        this.isSynthMorph = isSynthMorph;
        this.ware = ware;
        this.aptitudeMaximum = aptitudeMaximum;
        this.aptitudes = aptitudes;
        this.durability = durability;
        this.woundThreshold = durability/5;
        this.deathRating = (isSynthMorph? durability*1.5:durability*2)
        this.traits = "advantages: " +  advantages + ", disadvantages: " + disadvantages;
        this.cpCost = cpCost;
        this.creditCost = creditCost;
    }
}
