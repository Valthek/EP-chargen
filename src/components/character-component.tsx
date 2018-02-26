import * as React from "react";

import { Character } from "../models/character";
import { Aptitude } from "../models/aptitude";

export default class CharacterComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="character">
                <div className="character-basics">
                    <div className="basics-element">
                        <div className="basics-key">Character</div>
                        <div>Hello {this.props.character.name}</div>
                        <input type="text" className="basics-value"
                            value={this.props.character.name}
                            onChange={e => this.props.handleCharacterChange(e, "name")}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Faction</div>
                        <input type="text" className="basics-value"
                            value={this.props.character.faction}
                            onChange={e => this.props.handleCharacterChange(e, "faction")}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Motivations</div>
                        <input type="text" className="basics-value"
                            value={this.props.character.motivation}
                            onChange={e => this.props.handleCharacterChange(e, "motivation")}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Languages</div>
                        <input type="text" className="basics-value"
                            value={this.props.character.languages}
                            onChange={e => this.props.handleCharacterChange(e, "languages")}></input>
                    </div>
                </div>
                <div className="aptitude-block">
                    {this.generateAptitudeLine(true, this.props.character.egoAptitudes, "Ego", "egoAptitudes")}
                    {this.generateAptitudeLine(false, this.props.character.morph.aptitudes, "Morph", "morph", "aptitudes")}
                    {this.generateAptitudeLine(false, this.props.character.finalAptitudes, "Final", "finalAptitudes")}
                </div>
            </div>
        )
    };

    generateAptitudeLine(showAptitudeName: boolean, aptitudes: Aptitude[], linePrefix: string, characterAttribute:string, characterObjectAttribute?:string) {
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
    generateAptitudeElement(showAptitudeName: boolean, key: number, fullName: string, value: string, characterAttribute:string, characterObjectAttribute?:string) {
        return (
            <div className="aptitude-element" key={key}>
                {showAptitudeName ? <div className="aptitude-name">
                    <div className="aptitude-shorthand">{fullName.slice(0, 3)}</div>
                    <div className="aptitude-fullname">{fullName}</div>
                </div> : null}
                <input type="text" className="aptitude-value"
                    value={value}
                    onChange={e => this.props.handleCharacterChange(e, characterAttribute, key, "rating")}></input>
            </div>)
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
