import { Aptitude } from "./aptitude";

export class Skill {
    name: string;
    linkedAptitude: Aptitude;
    rating: number;
    type:string[] = [];
    specializations: string[] = [];

    constructor(name:string, aptitude:Aptitude, rating:number, type:string[], specializations:string[])
    {
        this.name = name;
        this.linkedAptitude = aptitude;
        this.rating = rating;
        this.type = type;
        this.specializations = specializations;
    }

    public AddSpecialization(newSpecialization: string) {
        this.specializations.push(newSpecialization);
    }

    public RemoveSpecialization(oldSpecialization: string) {
        if (this.specializations.length > 0) {
            var index = this.specializations.indexOf(oldSpecialization, 0);
            if (index > -1) {
                this.specializations.splice(index, 1);
            }
        }
    }
}