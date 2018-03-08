import * as React from "react";

import CharacterComponent from "./character-component";
import CharacterOutlineComponent from "./character-outline-component";
import BackgroundComponent from "./creation-steps/01-background-component";
import CareerComponent from "./creation-steps/02-career-component";
import { Character } from "../models/character";
import { DerivedStats } from "../models/derivedStats";
import { Skill } from "../models/skill";

export default class Generator extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            character: new Character("", "", "", "", false, 0),
            step: 0,
            selectedBackground: ""
        }
        this.handleCharacterChange = this.handleCharacterChange.bind(this);
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    }

    render() {
        return (
            <div className="generator">
                <CharacterComponent
                    character={this.state.character}
                    handleCharacterChange={this.handleCharacterChange}
                />
                <CharacterOutlineComponent
                    character={this.state.character}
                    selectBackground={this.handleBackgroundChange}
                />
                {this.renderCreationStep(this.state.step)}
                <div>{this.state.selectedBackground}</div>
                <div className="footer-bar">
                    {this.state.step > 0
                        ? <a href="#" id="previous-step" className="button" onClick={e => this.changeStep(e, -1)}>Previous Step</a>
                        : <a href="#" id="previous-step" className="button inactive">Previous Step</a>}
                    <div className="creation-state">{creationState[this.state.step]} ({this.state.step+1}/14)</div>
                    {this.state.step < 13
                        ? <a href="#" id="next-step" className="button" onClick={e => this.changeStep(e, 1)}>Next Step</a>
                        : <a href="#" id="next-step" className="button inactive">Next Step</a>}
                </div>
            </div>
        )
    }

    public changeStep(event: any, change: number): void {
        let tempStep = this.state.step + change;
        this.setState({ step: tempStep });
    }

    // This is how you overload methods in TS: multiple methods with compatible signatures to the implementation method down below
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
                        if (temp.constructor.name == "number") {
                            tempChar[attribute][index][objectAttribute] = +event.target.value;
                        }
                        else {
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

    public renderCreationStep(step: number) {
        let creationStep: JSX.Element[] = [
            <BackgroundComponent handleBackgroundChange={this.handleBackgroundChange}  selectedBackground={this.state.selectedBackground} />,
            <CareerComponent />];
        return creationStep[step];
    }

    public handleBackgroundChange(object: JSON): void {
        let tempChar = this.state.character;
        tempChar.SetBackground(object);
        this.setState((state) =>({ character: tempChar }));
        let newBackground = object[0].name;
        this.setState((state) => ({ selectedBackground:  newBackground}));
    }
}

enum creationState {
    'Background',
    'Career',
    'Interest',
    'Faction',
    'Aptitude Template',
    'Skills',
    'Languages',
    'Flex',
    'Reputation',
    'Customisation',
    'Derived Stats',
    'Starting Morph and Gear',
    'Motivation',
    'Review'
}