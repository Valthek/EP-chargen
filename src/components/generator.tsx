import * as React from "react";

import { Character } from "./character";

export interface GeneratorProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Generator extends React.Component<GeneratorProps, {}> {
    render() {
        return (
            <div className="generator">
                <div className="points">
                </div>
                <Character value="Test" />
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