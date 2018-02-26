export class Sleight {
    name: string;
    level: string;
    type: string;
    range: number;
    action: string;
    duration: string;
    strainMod: number;

    constructor(name: string, level: number, type: string, range: number, action: string, duration: string, strainMod: number) {
        this.name = name;
        this.level = SleightLevel[level];
        this.type = type;
        this.range = range;
        this.action = action;
        this.duration = duration;
        this.strainMod = strainMod;
    }
}

enum SleightLevel {
    chi,
    gamma,
    epsilon
}