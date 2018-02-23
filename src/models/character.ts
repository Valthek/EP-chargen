import { Skill } from "./skill";
import { Aptitude } from "./aptitude";
import { Morph } from "./morph";
import { Sleight } from "./sleight";

export class Character {
    name: string;
    faction: string;
    morph: Morph;
    motivation: string[] = [];
    languages: string[] = [];
    egoAptitudes: Aptitude[] = [];
    finalAptitudes: Aptitude[] = [];
    aptitudeChecks: number[] = [];
    reputation: number[] = [];
    derivedStats: number[] = [];
    skills: Skill[] = [];
    gear: string[] = [];
    pools: number[] = [];
    isAsync: boolean;
    psiLevel: number;
    chiSleights: Sleight[] = [];
    gammaSleights: Sleight[] = [];

    constructor() {
        let morphAptitudes: Aptitude[] = [];
        for (let i = 0; i < 7; i++)
        {morphAptitudes.push(new Aptitude(aptitudeValues[i], 0))}
        this.morph = new Morph("flat", false, "none", 20, 30, "none", "none", 0, 5000, morphAptitudes);

        for (let i = 0; i < 7; i++) {
            let tempAptitude = new Aptitude(aptitudeValues[i], 15);
            this.egoAptitudes.push(tempAptitude);
        }

        this.finalAptitudes = getFinalAptitudes(this.egoAptitudes, this.morph);
    }

    public setDerivedStats() {
        this.derivedStats[0] = (this.egoAptitudes[2].rating + this.egoAptitudes[1].rating) / 5;
        for (let i = 0; i < this.egoAptitudes.length; i++) {
            this.aptitudeChecks[i] = this.egoAptitudes[i].rating * 3;
        }
        this.derivedStats[1] = this.egoAptitudes[5].rating * 2;
        this.derivedStats[2] = Math.round(this.derivedStats[1] / 5);
        this.derivedStats[3] = this.derivedStats[1] * 2;
        this.derivedStats[4] = this.isAsync ? (this.psiLevel * 10) + (this.chiSleights.length * 5) : 0;
    }
}

function getFinalAptitudes(aptitudeOne: Aptitude[], morph: Morph): Aptitude[] {
    if (aptitudeOne.length == morph.aptitudes.length) {
        let tempAptitudes: Aptitude[] = [];
        for (let i = 0; i < aptitudeOne.length; i++) {
            tempAptitudes.push(new Aptitude(aptitudeOne[i].fullName,
                aptitudeOne[i].rating + morph.aptitudes[i].rating > morph.aptitudeMaximum?
                 morph.aptitudeMaximum : aptitudeOne[i].rating + morph.aptitudes[i].rating));
        }
        return tempAptitudes;
    }
    else {
        console.log("Warning: Aptitude arrays are not of equal size. No addition performed.");
        return aptitudeOne;
    }
}

enum derivedAttributes {
    Initiative,
    Lucidity,
    'Trauma Threshold',
    'Insanity Rating',
    'Infection Rating'
}

enum aptitudeValues {
    cognition,
    coordination,
    intuition,
    reflexes,
    savvy,
    somatics,
    willpower
}
