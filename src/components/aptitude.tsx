
import * as React from "react";

export interface AptitudeProps { showAptitudeName: boolean; cognition: number; coordination: number; intuition: number; reflexes: number; savvy: number; somatics: number; willpower: number; }

// This 
export class Aptitude extends React.Component<AptitudeProps, {}> {
    render() {
        return (
            <div className="aptitude-collection">
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">COG</div>
                        <div className="aptitude-fullname">Cognition</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.cognition}"></input>
                </div>
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">COO</div>
                        <div className="aptitude-fullname">Coordination</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.coordination}"></input>
                </div>
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">INT</div>
                        <div className="aptitude-fullname">Intuition</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.intuition}"></input>
                </div>
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">REF</div>
                        <div className="aptitude-fullname">Reflexes</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.reflexes}"></input>
                </div>
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">SAV</div>
                        <div className="aptitude-fullname">Savvy</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.savvy}"></input>
                </div>
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">SOM</div>
                        <div className="aptitude-fullname">Somatics</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.somatics}"></input>
                </div>
                <div className="aptitude-element">
                    {this.props.showAptitudeName ? <div>
                        <div className="aptitude-shorthand">WIL</div>
                        <div className="aptitude-fullname">Willpower</div>
                    </div> : null}
                    <input type="text" className="aptitude-value" default-value="{this.props.willpower}"></input>
                </div>
            </div>
        )
    };    
}
