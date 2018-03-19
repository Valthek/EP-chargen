/// <reference path="../../../typings.d.ts" />
import * as React from "react";
import Helpers from '../../helper';

export default class SelectorDropdown extends React.Component<any, any> {
    
    selectorData:any; 
    selectorSet: any;

    constructor(props: any) {
        super(props);
    }


    GetSelectorData(selectorName: string) {
        // return first object that matches the BG name from BGdata
        return this.selectorData.filter(function (object) {
            return object["name"] === selectorName;
        })[0];
    }

    render() {
        let selectorName:string = this.props.selectorName + "-selection";
        return <div className={selectorName}>
            {/* On change, wipe all background data and get a clean background*/}
            <select defaultValue={this.props.selectedOption.name} onChange={e => this.UpdateSelection(e.target.value)} id="choice-selector">
                {this.GetList()}
            </select>
            {this.ShowChoice(this.props.selectedOption)}
        </div>
    }

    // get a clean backgrond from the data
    UpdateSelection(selectorName: any) {
        let tempObj = this.GetSelectorData(selectorName);
        this.selectorSet = tempObj;
        this.props.HandleSelectionChange(tempObj);
    }

    GetList() {
        // generate list of BG elements
        let Options: JSX.Element[] = [];
        // first element is a placeholder
        Options.push(<option key="default" className="hidden-select" value="default">Select one</option>);
        for (var i = 0; i < this.selectorData.length; i++) {
            Options.push(<option key={this.selectorData[i].name} value={this.selectorData[i].name}>{this.selectorData[i].name}</option>);
        }
        return Options;
    }

    ShowChoice(backgroundData: any) {
        return (<div >
            {/*Test if the backgroundData exists*/}
            {!Helpers.isEmptyObject(backgroundData)
                ? <div className="choice">
                    <div className="description">
                        {backgroundData.description}
                    </div>
                    <div className="skills">
                        {this.ShowSelectionSkills(backgroundData)}
                    </div>
                </div>
                : <div className="help">Choose a background via the selector.</div>
            }
        </div>)
    }

    ShowSelectionSkills(backgroundData: any) {
        let backgroundSkills: JSX.Element[] = [];
        backgroundSkills.push(
            <div key={'header'} className="skill-container">
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
            backgroundSkills.push(<div key={skill.name + i} className="skill-container">
                {this.GetFieldSelector(skill, i)}
                <div className="skill attribute">{skill.attribute}</div>
                <div className="skill rating">{skill.rating}</div>
                <div className="skill types">{skillTypes}</div>
            </div>)
        }
        return backgroundSkills;
    }

    GetFieldSelector(skill: any, index: number) {
        let fieldOptions: JSX.Element[] = [];
        if (skill.fieldOptions && skill.fieldOptions.length > 0) {
            for (let o = 0; o < skill.fieldOptions.length; o++) {
                fieldOptions.push(
                    <option key={skill.fieldOptions[o]} value={skill.fieldOptions[o]}>{skill.name}: {skill.fieldOptions[o]}</option>
                )
            }
            return (
                <select defaultValue={skill.field[0]} onChange={e => this.UpdateFieldSelection(index, e.target.value)} id="field-selector" className="skill identity">
                    {fieldOptions}
                </select>);
        }
        else {
            return <div className="skill identity">{skill.name}</div>
        }
    }

    UpdateFieldSelection(index: number, field: any) {
        // this is peak stupid
        // JS passes by value, except object references are values, so it passes objects as reference
        // so we deserialize the object to a JSON and then serialize it again so we have a clean object
        let strData = JSON.stringify(this.selectorSet);
        let dataObject = JSON.parse(strData);
        dataObject.skill[index].field = [field];
        this.selectorSet = dataObject;
        this.props.HandleSelectionChange(dataObject);
    }
}