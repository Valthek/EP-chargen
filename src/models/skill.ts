import { Aptitude } from "./aptitude";

export class Skill {
    name: string;
    linkedAptitude: Aptitude;
    ranks: number;
    specializations: string[] = [];

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