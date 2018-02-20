import * as React from "react";

import { Character } from "./character";

export interface GeneratorProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Generator extends React.Component<GeneratorProps, {}> {
    render() {
        return (
            <div className="generator">
                This deals with the logic  
                <div className="points">
                    Some number of points left to spend
                </div>
                <Character value="Test" />
            </div>
        )
    }
}