/// <reference path="../../../typings.d.ts" />
import * as React from "react";
import * as data from '../../data/interest-data.json';
import SelectorDropdown from '../creation-steps/selector-dropdown';
import Helpers from '../../helper';

export default class InterestComponent extends SelectorDropdown {
    constructor(props: any) {
        super(props);

        this.selectorData = (data as any).interest;
        if (!Helpers.isEmptyObject(this.props.selectedOption)) {
            this.UpdateSelection(this.props.selectedOption.name);
        }
    }
    selectorSet: any;
}