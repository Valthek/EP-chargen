import * as React from "react";

import { Aptitude } from "./aptitude";

export interface CharacterProps { value: string; }

export class Character extends React.Component<CharacterProps, {}> {
    render() {
        return (
            <div className="character">
            Hello     
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
                        <Aptitude showAptitudeName={true} cognition={15} coordination={15} intuition={15} reflexes={15} savvy={15} somatics={15} willpower={15} />
                        <Aptitude showAptitudeName={false} cognition={15} coordination={15} intuition={15} reflexes={15} savvy={15} somatics={15} willpower={15} />
                        <Aptitude showAptitudeName={false} cognition={15} coordination={15} intuition={15} reflexes={15} savvy={15} somatics={15} willpower={15} />
                </div>
            </div>
        )
    };
}

