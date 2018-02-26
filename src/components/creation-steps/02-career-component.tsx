/// <reference path="../../../typings.d.ts" />
import * as React from "react";
import * as data from '../../data/career-data.json';

export default class CareerComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    
    render(){
        const word = (data as any).name;
        console.log(word);
        return <div> "Career!" </div> 
    }
}