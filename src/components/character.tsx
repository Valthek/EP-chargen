import * as React from "react";

export interface CharacterProps { value: string; }

export class Character extends React.Component<CharacterProps, {}> {
    render() {
        return (
            <div className="character">
                <div className="character-basics">
                    <div className="basics-element">
                        <div className="basics-key">Character</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Background</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Faction</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Morph</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Gender Identity</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Actual Age</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Current Moxie Points</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Rez Points</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                    <div className="basics-element">
                        <div className="basics-key">Motivations</div>
                        <input type="text" className="basics-value" defaultValue={this.props.value}></input>
                    </div>
                </div>
                <div className="aptitude-block">
                    {generateAptitudeLine(true, [15, 15, 15, 15, 15, 15])}
                </div>
            </div>
        )
    };
}

function generateAptitudeLine(showAptitudeName: boolean, basevalues: number[]) {
    const aptitudeElements = basevalues.map((number, index) =>
        generateAptitudeElement(showAptitudeName, index, aptitudeValues[index].slice(0, 3), aptitudeValues[index], number.toString())
    )
    return (
        <div className="aptitude-collection">
            {aptitudeElements}
        </div>
    )
}

function generateAptitudeElement(showAptitudeName: boolean, key:number, shorthand: string, fullName: string, value: string) {
    return <div className="aptitude-element" key={key}>
        {showAptitudeName ? <div className="aptitude-name">
            <div className="aptitude-shorthand">{shorthand}</div>
            <div className="aptitude-fullname">{fullName}</div>
        </div> : null}
        <input type="text" className="aptitude-value"  defaultValue={value}></input>
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
