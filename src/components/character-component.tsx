import * as React from "react";

import { Character } from "../models/character";
import { Aptitude } from "../models/aptitude";

export default class CharacterComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showCharacterSheet: false
        }
    }

    render() {
        return (
            <div className="character">
                <a href="#" className="toggle-sheet" onClick={e => this.toggleCharacterSheet(e)}>{this.state.showCharacterSheet ? 'hide sheet' : 'show sheet'}</a>
                {this.state.showCharacterSheet ?
                    <div className="character-sheet">
                        <div className="character-basics">
                            <div className="basics-element">
                                <div className="basics-key">Name:</div>
                                <div className="basics-value">{this.props.character.name}</div>
                            </div>
                            <div className="basics-element">
                                <div className="basics-key">Motivations: </div>
                                <div className="basics-value">{this.props.character.motivation}</div>
                            </div>
                        </div>
                        <div className="aptitude-block">
                            {this.generateAptitudeLine(true, this.props.character.egoAptitudes, "Ego", "egoAptitudes")}
                            {this.generateAptitudeLine(false, this.props.character.morph.aptitudes, "Morph", "morph", "aptitudes")}
                            {this.generateAptitudeLine(false, this.props.character.finalAptitudes, "Final", "finalAptitudes")}
                        </div>
                    </div>
                    : null}
            </div>
        )
    };

    generateAptitudeLine(showAptitudeName: boolean, aptitudes: Aptitude[], linePrefix: string, characterAttribute: string, characterObjectAttribute?: string) {
        const aptitudeElements = aptitudes.map((number, index) =>
            this.generateAptitudeElement(showAptitudeName, index, aptitudeValues[index], aptitudes[index].rating.toString(), characterAttribute, characterObjectAttribute)
        )
        return (
            <div className="aptitude-collection">
                <div className="prefix">
                    {showAptitudeName ? <div className="line-prefix blank"></div> : null}
                    {linePrefix ? <div className="line-prefix">{linePrefix}</div> : null}
                </div>
                {aptitudeElements}
            </div>
        )
    }

    // key is a unique identifier so React can properly update certain parts
    generateAptitudeElement(showAptitudeName: boolean, key: number, fullName: string, value: string, characterAttribute: string, characterObjectAttribute?: string) {
        return (
            <div className="aptitude-element" key={key}>
                {showAptitudeName ? <div className="aptitude-name">
                    <div className="aptitude-shorthand">{fullName.slice(0, 3)}</div>
                    <div className="aptitude-fullname">{fullName}</div>
                </div> : null}
                <div className="aptitude-value">
                    {value}
                </div>
            </div>)
    }

    toggleCharacterSheet(event: any) {
        this.setState({ showCharacterSheet: !this.state.showCharacterSheet });
    }
}

enum aptitudeValues {
    cognition,
    coordination,
    intuition,
    reflexes,
    savvy,
    somatics,
    willpower
}
