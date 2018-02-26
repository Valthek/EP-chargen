/// <reference path="../../../typings.d.ts" />
import * as React from "react";
import * as data from '../../data/background-data.json';

export default class BackgroundComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    
    render(){
        const word = (data as any).name;
        console.log(word);
        return <div> "Hello" </div> 
    }
}