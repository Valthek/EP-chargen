import { Skill } from "./skill";
import { Aptitude } from "./aptitude";
import { Morph } from "./morph";
import { Sleight } from "./sleight";
import { DerivedStats } from "./derivedStats";
import { Selection } from "./selection";

export class Character {
    public name: string;
    public concept: string;
    public background: Selection[] = new Array(3);
    public faction: string;
    public morph: Morph;
    public motivation: string;
    public languages: string;
    public egoAptitudes: Aptitude[] = [];
    public finalAptitudes: Aptitude[] = [];
    public reputation: number[] = [];
    public derivedStats: DerivedStats;
    public skills: Skill[] = [];
    public gear: string[] = [];
    public pools: number[] = [];
    public isAsync: boolean;
    public psiLevel: number;
    public chiSleights: Sleight[] = [];
    public gammaSleights: Sleight[] = [];

    constructor(name: string, concept: string, motivation: string, languages: string, isAsync: boolean, psiLevel: number, morph?: Morph) {
        this.name = name;
        this.concept = concept;
        this.motivation = motivation;
        this.languages = languages;
        this.isAsync = isAsync;
        this.psiLevel = psiLevel;
        if (!morph) {
            let morphAptitudes: Aptitude[] = [];
            for (let i = 0; i < 7; i++) { morphAptitudes.push(new Aptitude(aptitudeValues[i], 0)) }
            this.morph = new Morph("flat", false, "none", 20, 30, "none", "none", 0, 5000, morphAptitudes);
        }
        else {
            this.morph = morph;
        }
        for (let i = 0; i < 7; i++) {
            let tempAptitude = new Aptitude(aptitudeValues[i], 15);
            this.egoAptitudes.push(tempAptitude);
        }
        this.finalAptitudes = this.GetFinalAptitudes(this.egoAptitudes, this.morph);
        this.derivedStats = new DerivedStats(this.finalAptitudes);
    }

    public GetFinalAptitudes(aptitudeOne: Aptitude[], morph: Morph): Aptitude[] {
        if (aptitudeOne.length == morph.aptitudes.length) {
            let tempAptitudes: Aptitude[] = [];
            for (let i = 0; i < aptitudeOne.length; i++) {
                const newRating = (+aptitudeOne[i].rating + +morph.aptitudes[i].rating) > morph.aptitudeMaximum ?
                    morph.aptitudeMaximum : +aptitudeOne[i].rating + +morph.aptitudes[i].rating
                tempAptitudes.push(new Aptitude(aptitudeOne[i].fullName, newRating));
            }
            return tempAptitudes;
        }
        else {
            console.log("Warning: Aptitude arrays are not of equal size. No addition performed.");
            return aptitudeOne;
        }
    }

    public SetBackground(background: any) {
        let skills: Skill[] = [];
        for (let i = 0; i < background.skill.length; i++) {
            let json = background.skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill: Skill = new Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill)
            }
        }
        this.background[0] = new Selection(background.name, background.description, skills);
    }

    public SetCareer(career:any){
        let skills: Skill[] = [];
        for (let i = 0; i < career.skill.length; i++) {
            let json = career.skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill: Skill = new Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill)
            }
        }
        this.background[1] = new Selection(career.name, career.description, skills);
    }

    public SetInterest(interest:any){
        let skills: Skill[] = [];
        for (let i = 0; i < interest.skill.length; i++) {
            let json = interest.skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill: Skill = new Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill)
            }
        }
        this.background[2] = new Selection(interest.name, interest.description, skills);
    }

    public SetFaction(faction: string) {
        this.faction = faction;
    }
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
