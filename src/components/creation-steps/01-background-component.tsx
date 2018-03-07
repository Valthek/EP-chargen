/// <reference path="../../../typings.d.ts" />
import * as React from "react";
import * as data from '../../data/background-data.json';

export default class BackgroundComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedBackground: ""
        }
    }
    backgroundData = (data as any).background;

    render() {
        const word = (data as any).background;
        return <div className="background-selection">
            <select onChange={e => this.UpdateBackgroundSelection(e.target.value)}
                id="background-selector">
                {this.GetBackgroundList()}
            </select>
            {this.ShowBackgroundChoice()}
        </div>
    }

    UpdateBackgroundSelection(backgroundName: any) {
        this.props.handleBackgroundChange(this.GetBackgroundData(backgroundName));
        this.setState({ selectedBackground: backgroundName })
    }

    GetBackgroundList() {
        let backgroundOptions: JSX.Element[] = [];
        backgroundOptions.push(<option key="default" className="hidden-select" value="default">Select one</option>);
        for (var i = 0; i < this.backgroundData.length; i++) {
            backgroundOptions.push(<option key={this.backgroundData[i].name} value={this.backgroundData[i].name}>{this.backgroundData[i].name}</option>);
        }
        return backgroundOptions;
    }

    GetBackgroundData(backgroundName: string) {
        return this.backgroundData.filter(function (object) {
            return object["name"] === backgroundName;
        });
    }

    ShowBackgroundChoice() {
        let backgroundData = this.GetBackgroundData(this.state.selectedBackground)[0];
        console.log(backgroundData);
        return (<div >
            {this.state.selectedBackground
                ? <div className="background-choice">
                    <div className="background-description">
                        {backgroundData.description}
                    </div>
                    <div className="background-skills">
                        {this.ShowBackgroundSkills(backgroundData)}
                    </div>
                </div>
                : <div className="background-help">Choose a background via the selector.</div>
            }
        </div>)
    }
    ShowBackgroundSkills(backgroundData: any) {
        let backgroundSkills: JSX.Element[] = [];
        backgroundSkills.push(<div key={'header'} className="background-skill">
            <div className="skill header name">Skill</div>
            <div className="skill header attribute">Linked Attribute</div>
            <div className="skill header rating">Rating</div>
            <div className="skill header types">Type</div>
        </div>)
        for (let i = 0; i < backgroundData.skill.length; i++) {
            let skill = backgroundData.skill[i];
            let skillTypes = skill.type.map(function (type) {
                return <div key={type} className="skill type">{type}</div>
            });
            backgroundSkills.push(<div key={skill.name + i} className="background-skill">
                {this.GetFieldSelector(skill)}
                <div className="skill attribute">{skill.attribute}</div>
                <div className="skill rating">{skill.rating}</div>
                <div className="skill types">{skillTypes}</div>
            </div>)
        }
        return backgroundSkills;
    }

    GetFieldSelector(skill: any) {
        let fieldOptions: JSX.Element[] = [];
        if (skill.field.length > 0) {
            for (let o = 0; o < skill.field.length; o++) {
                fieldOptions.push(
                    <option key={skill.field[o]} value={skill.field[o]}>{skill.name}: {skill.field[o]}</option>
                )
            }            
        return (<select onChange={e => this.UpdateFieldSelection(e.target.value)} id="field-selector" className="skill identity">{fieldOptions}</select>);
        }
        else
        {
            return <div className="skill identity">{skill.name}</div>
        }
    }
    UpdateFieldSelection(event: any) {

    }

}