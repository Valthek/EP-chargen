import * as React from "react";

import { Character } from "../models/character";
import { Aptitude } from "../models/aptitude";

export interface CharacterProps { value: string; character: Character; }

export class CharacterComponent extends React.Component<CharacterProps, {}> {
    render() {
        return (
            <div className="character">
                <div className="character-basics">
                    <div className="basics-element">
                        <div className="basics-key">Character</div>
                        <input type="text" className="basics-value" defaultValue={this.props.character.name}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Faction</div>
                        <input type="text" className="basics-value" defaultValue={this.props.character.faction}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Morph</div>
                        <input type="text" className="basics-value" defaultValue={this.props.character.morph.name}></input>
                    </div>>
                    <div className="basics-element">
                        <div className="basics-key">Motivations</div>
                        <input type="text" className="basics-value" defaultValue={this.props.character.motivation}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Languages</div>
                        <input type="text" className="basics-value" defaultValue={this.props.character.languages}></input>
                    </div>
                </div>
                <div className="aptitude-block">
                    {generateAptitudeLine(true, this.props.character.aptitudes)}
                </div>
            </div>
        )
    };
}

function generateAptitudeLine(showAptitudeName: boolean, aptitudes: Aptitude[]) {
    const aptitudeElements = aptitudes.map((number, index) =>
        generateAptitudeElement(showAptitudeName, index, aptitudeValues[index].slice(0, 3), aptitudeValues[index], aptitudes[index].rating.toString())
    )
    return (
        <div className="aptitude-collection">
            {aptitudeElements}
        </div>
    )
}

// key is a unique identifier so React can properly update certain parts
function generateAptitudeElement(showAptitudeName: boolean, key: number, shorthand: string, fullName: string, value: string) {
    return <div className="aptitude-element" key={key}>
        {showAptitudeName ? <div className="aptitude-name">
            <div className="aptitude-shorthand">{shorthand}</div>
            <div className="aptitude-fullname">{fullName}</div>
        </div> : null}
        <input type="text" className="aptitude-value" defaultValue={value}></input>
    </div>
}

enum aptitudeValues {
    cognition,
    intuition,
    reflexes,
    savvy,
    somatics,
    willpower
}
