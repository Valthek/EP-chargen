import { Skill } from "./skill";
import { Aptitude } from "./aptitude";
import { Morph } from "./morph";
import { Sleight } from "./sleight";

export class Character{
    name:string;
    faction: string;
    morph: Morph;
    motivation: string[];
    languages: string[];
    aptitudes: Aptitude[];
    aptitudeChecks: number[];
    reputation: number[];
    derivedStats: number[];
    skills: Skill[];
    gear: string[];
    pools: number[];
    isAsync: boolean;
    psiLevel: number;
    chiSleights: Sleight[];
    gammaSleights: Sleight[];

    public setDerivedStats()
    {
        this.derivedStats[0] = (this.aptitudes[2].rating +this.aptitudes[1].rating)/5;
        for (let i = 0; i < this.aptitudes.length; i++)
        {
            this.aptitudeChecks[i] = this.aptitudes[i].rating * 3;
        }
        this.derivedStats[1] = this.aptitudes[5].rating*2;
        this.derivedStats[2] = Math.round(this.derivedStats[1]/5);
        this.derivedStats[3] = this.derivedStats[1]*2;
        this.derivedStats[4] = this.isAsync ? (this.psiLevel * 10) + (this.chiSleights.length * 5) : 0;
    }
}

enum derivedAttributes{
    Initiative,
    Lucidity,
    'Trauma Threshold',
    'Insanity Rating',
    'Infection Rating'
}