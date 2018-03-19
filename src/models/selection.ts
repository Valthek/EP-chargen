import { Skill } from "./skill";

export class Selection {
    name: string;
    description:string;
    skills: Skill[] = [];

    constructor(name:string, description:string, skills:Skill[])
    {
        this.name = name;
        this.description = description;
        this.skills = skills;
    }
}