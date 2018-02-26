import { Aptitude } from "./aptitude";

export class DerivedStats {
    initiative:number;
    aptitudeChecks:Aptitude[] = [];
    lucidity:number;
    traumaThreshold:number;
    insanityRating:number;
    infectionRating:number;

    constructor(finalAptitudes:Aptitude[], isAsync?:boolean, psiLevel?:number, chiSleights?:number)
    {
        this.initiative = (finalAptitudes[2].rating + finalAptitudes[1].rating) / 5;
        for (let i = 0; i < finalAptitudes.length; i++) {
            this.aptitudeChecks[i] = new Aptitude(finalAptitudes[i].fullName, finalAptitudes[i].rating * 3);
        }
        this.lucidity = finalAptitudes[5].rating * 2;
        this.traumaThreshold = Math.round(this.lucidity / 5);
        this.insanityRating = this.lucidity * 2;
        this.infectionRating = isAsync ? (psiLevel * 10) + (chiSleights * 5) : 0;
    }
}