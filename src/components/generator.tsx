import * as React from "react";

import CharacterComponent from "./character-component";
import { Character } from "../models/character";
import {DerivedStats} from "../models/derivedStats";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Generator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            character: new Character("", "", "", "", false, 0),
            step: 0
        }

        this.handleCharacterChange = this.handleCharacterChange.bind(this);
    }
    render() {
        return (
            <div className="generator">
                <CharacterComponent
                    character={this.state.character}
                    handleCharacterChange={this.handleCharacterChange}
                />
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

    handleCharacterChange(event: any, attribute: string): void
    handleCharacterChange(event: any, attribute: string, index: number): void
    handleCharacterChange(event: any, attribute: string, index: number, objectAttribute: string): void

    // this method updates the character object when changes are observed by components
    // this method is also shit and needs to be refactored but I haven't found an elegant way to do it
    public handleCharacterChange(event: any, attribute: string, index?: number, objectAttribute?: string): void {
        let tempChar = this.state.character;

        let characterAttribute = tempChar[attribute];
        let temp = characterAttribute.constructor.name;
        switch (temp) {
            case "String":
                tempChar[attribute] = event.target.value;
                break;
            case "Number":
                tempChar[attribute] = +event.target.value;
                break;
            case "Boolean":
                tempChar[attribute] = !!event.target.value;
                break;
            case "Array":
                characterAttribute = characterAttribute[index];
                temp = characterAttribute.constructor.name;
                switch (temp) {
                    case "Aptitude":
                            characterAttribute = characterAttribute[objectAttribute];
                            temp = characterAttribute.constructor.name;
                            if (temp.constructor.name == "number")
                            {
                                tempChar[attribute][index][objectAttribute] = +event.target.value;
                            }
                            else
                            {
                                tempChar[attribute][index][objectAttribute] = event.target.value;
                            }
                        break;
                    case "Sleight":
                        // not implemented
                        break;
                    case "Number":
                        tempChar[attribute][index] = +event.target.value;
                    case "String":
                        tempChar[attribute][index] = event.target.value;
                        break;
                    case "Skill":
                        break;
                }
                break;
            case "Morph":
                break;
        }
        tempChar = tempChar as Character;
        tempChar.finalAptitudes = tempChar.GetFinalAptitudes(tempChar.egoAptitudes, tempChar.morph);
        tempChar.derivedStats = new DerivedStats(tempChar.finalAptitudes);
        this.setState({ character: tempChar })
    }

    public handleAttributeChange(event: any, index: number, attribute: string): void {

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