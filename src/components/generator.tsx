import * as React from "react";

import CharacterComponent from "./character-component";
import { Character } from "../models/character";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Generator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            step: 0
        }
    }
    char: Character = new Character();
    render() {
        return (
            <div className="generator">
                <CharacterComponent value="Test" character={this.char} />
                {this.state.step > 0 ? <button
                    id="previous-step"
                    onClick={e => this.changeStep(e, -1)}>
                    Step back citizen </button> : null}
                {this.state.step < 14 ? <button
                    id="next-step"
                    onClick={e => this.changeStep(e, 1)}>
                    Move along citizen</button> : null}
            </div>
        )
    }

    public changeStep(event: any, change: number): void {
        let tempStep = this.state.step + change;
        this.setState({ step: tempStep });
    }
}

enum creationState {
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