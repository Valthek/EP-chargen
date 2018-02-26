/// <reference path="../../../typings.d.ts" />
import * as React from "react";
import * as data from '../../data/background-data.json';

export default class BackgroundComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    backgroundData = (data as any).background;

    render() {
        const word = (data as any).background;
        console.log(word);
        return <div className="background-selection">
            <select onChange={e => this.props.handleBackgroundChange(this.getBackgroundData(e.target.value))}>
                {this.getBackgroundList()}
            </select>

        </div>
    }

    getBackgroundList() {
        let backgroundOptions: JSX.Element[] = [];
        for (var i = 0; i < this.backgroundData.length; i++) {
            backgroundOptions.push(<option key={this.backgroundData[i].name} value={this.backgroundData[i].name}>{this.backgroundData[i].name}</option>);
        }
        return backgroundOptions;
    }

    getBackgroundData(backgroundName:string){
        return this.backgroundData.filter(function (object) {
            return object["name"] === backgroundName;
        });
    }
}