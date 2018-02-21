export class Sleight{
    name:string;
    level: SleightLevel; 
    type: string;
    range: number;
    action: string;
    duration: string;
    strainMod: number;
}

enum SleightLevel{
    chi,
    gamma,
    epsilon
}