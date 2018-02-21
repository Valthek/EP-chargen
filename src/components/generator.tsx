import * as React from "react";

import { CharacterComponent } from "./character-component";
import { Character } from "../models/character";

export interface GeneratorProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Generator extends React.Component<GeneratorProps, {}> {
    char:Character = new Character();
    render() {
        return (
            <div className="generator">
                <div className="points">
                </div>
                <CharacterComponent value="Test" character={this.char}/>
                <input type="button" id="previous-step"></input>                
                <input type="button" id="next-step"></input>
            </div>
        )
    }
}

function nextStep(currentStep:number)
{
    // do things
}

function previousStep(currentStep:number)
{

}

enum creationState{
    Background,
    Career,
    Interest,
    Faction,
    'Aptitude Template',
    Skills,
    Languages,
    Flex,
    Reputation,
    Customisation,
    'Derived Stats',
    'Starting Morph and Gear',
    Motivation,
    Review
}