import * as React from "react";

import { Character } from "../models/character";
import { Aptitude } from "../models/aptitude";

export default class CharacterOutlineComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            < div className="creation-step" >
                <div className="creation-element">
                    <div className="creation-key">Character Name:</div>
                    <input type="text" className="creation-value"
                        value={this.props.character.name}
                        onChange={e => this.props.handleCharacterChange(e, "name")}></input>
                </div>
                <div className="creation-element">
                    <div className="creation-key">Character Concept:</div>
                    <input type="text" className="creation-value"
                        value={this.props.character.name}
                        onChange={e => this.props.handleCharacterChange(e, "name")}></input>
                </div>
            </div >)
    }
}