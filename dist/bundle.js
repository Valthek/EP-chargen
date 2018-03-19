/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = __webpack_require__(11);
class Helpers {
    static isEmptyObject(object) {
        let objectString = querystring_1.stringify(object);
        if (objectString.length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
exports.default = Helpers;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings.d.ts" />
const React = __webpack_require__(0);
const helper_1 = __webpack_require__(1);
class SelectorDropdown extends React.Component {
    constructor(props) {
        super(props);
    }
    GetSelectorData(selectorName) {
        // return first object that matches the BG name from BGdata
        return this.selectorData.filter(function (object) {
            return object["name"] === selectorName;
        })[0];
    }
    render() {
        let selectorName = this.props.selectorName + "-selection";
        return React.createElement("div", { className: selectorName },
            React.createElement("select", { defaultValue: this.props.selectedOption.name, onChange: e => this.UpdateSelection(e.target.value), id: "choice-selector" }, this.GetList()),
            this.ShowChoice(this.props.selectedOption));
    }
    // get a clean backgrond from the data
    UpdateSelection(selectorName) {
        let tempObj = this.GetSelectorData(selectorName);
        this.selectorSet = tempObj;
        this.props.HandleSelectionChange(tempObj);
    }
    GetList() {
        // generate list of BG elements
        let Options = [];
        // first element is a placeholder
        Options.push(React.createElement("option", { key: "default", className: "hidden-select", value: "default" }, "Select one"));
        for (var i = 0; i < this.selectorData.length; i++) {
            Options.push(React.createElement("option", { key: this.selectorData[i].name, value: this.selectorData[i].name }, this.selectorData[i].name));
        }
        return Options;
    }
    ShowChoice(backgroundData) {
        return (React.createElement("div", null, !helper_1.default.isEmptyObject(backgroundData)
            ? React.createElement("div", { className: "choice" },
                React.createElement("div", { className: "description" }, backgroundData.description),
                React.createElement("div", { className: "skills" }, this.ShowSelectionSkills(backgroundData)))
            : React.createElement("div", { className: "help" }, "Choose a background via the selector.")));
    }
    ShowSelectionSkills(backgroundData) {
        let backgroundSkills = [];
        backgroundSkills.push(React.createElement("div", { key: 'header', className: "skill-container" },
            React.createElement("div", { className: "skill header name" }, "Skill"),
            React.createElement("div", { className: "skill header attribute" }, "Linked Attribute"),
            React.createElement("div", { className: "skill header rating" }, "Rating"),
            React.createElement("div", { className: "skill header types" }, "Type")));
        for (let i = 0; i < backgroundData.skill.length; i++) {
            let skill = backgroundData.skill[i];
            let skillTypes = skill.type.map(function (type) {
                return React.createElement("div", { key: type, className: "skill type" }, type);
            });
            backgroundSkills.push(React.createElement("div", { key: skill.name + i, className: "skill-container" },
                this.GetFieldSelector(skill, i),
                React.createElement("div", { className: "skill attribute" }, skill.attribute),
                React.createElement("div", { className: "skill rating" }, skill.rating),
                React.createElement("div", { className: "skill types" }, skillTypes)));
        }
        return backgroundSkills;
    }
    GetFieldSelector(skill, index) {
        let fieldOptions = [];
        if (skill.fieldOptions && skill.fieldOptions.length > 0) {
            for (let o = 0; o < skill.fieldOptions.length; o++) {
                fieldOptions.push(React.createElement("option", { key: skill.fieldOptions[o], value: skill.fieldOptions[o] },
                    skill.name,
                    ": ",
                    skill.fieldOptions[o]));
            }
            return (React.createElement("select", { defaultValue: skill.field[0], onChange: e => this.UpdateFieldSelection(index, e.target.value), id: "field-selector", className: "skill identity" }, fieldOptions));
        }
        else {
            return React.createElement("div", { className: "skill identity" }, skill.name);
        }
    }
    UpdateFieldSelection(index, field) {
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
exports.default = SelectorDropdown;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Aptitude {
    constructor(name, rating) {
        this.fullName = name;
        this.shortHand = name.slice(0, 3);
        this.rating = rating;
    }
}
exports.Aptitude = Aptitude;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const aptitude_1 = __webpack_require__(3);
class DerivedStats {
    constructor(finalAptitudes, isAsync, psiLevel, chiSleights) {
        this.aptitudeChecks = [];
        this.initiative = (finalAptitudes[2].rating + finalAptitudes[1].rating) / 5;
        for (let i = 0; i < finalAptitudes.length; i++) {
            this.aptitudeChecks[i] = new aptitude_1.Aptitude(finalAptitudes[i].fullName, finalAptitudes[i].rating * 3);
        }
        this.lucidity = finalAptitudes[5].rating * 2;
        this.traumaThreshold = Math.round(this.lucidity / 5);
        this.insanityRating = this.lucidity * 2;
        this.infectionRating = isAsync ? (psiLevel * 10) + (chiSleights * 5) : 0;
    }
}
exports.DerivedStats = DerivedStats;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(6);
const generator_1 = __webpack_require__(7);
ReactDOM.render(React.createElement(generator_1.default, { compiler: "TypeScript", framework: "React" }), document.getElementById("container"));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const character_component_1 = __webpack_require__(8);
const _01_background_component_1 = __webpack_require__(9);
const _02_career_component_1 = __webpack_require__(14);
const _03_interest_component_1 = __webpack_require__(16);
const character_1 = __webpack_require__(18);
const derivedStats_1 = __webpack_require__(4);
class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: new character_1.Character("", "", "", "", false, 0),
            step: 0,
            selectedBackground: {},
            selectedCareer: {},
            selectedInterest: {}
        };
        this.handleCharacterChange = this.handleCharacterChange.bind(this);
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
        this.handleCareerChange = this.handleCareerChange.bind(this);
        this.handleInterestChange = this.handleInterestChange.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "generator" },
            React.createElement(character_component_1.default, { character: this.state.character, handleCharacterChange: this.handleCharacterChange }),
            this.renderCreationStep(this.state.step),
            React.createElement("div", { className: "footer-bar" },
                this.state.step > 0
                    ? React.createElement("a", { href: "#", id: "previous-step", className: "button", onClick: e => this.changeStep(e, -1) }, "Previous Step")
                    : React.createElement("a", { href: "#", id: "previous-step", className: "button inactive" }, "Previous Step"),
                React.createElement("div", { className: "creation-state" },
                    creationState[this.state.step],
                    " (",
                    this.state.step + 1,
                    "/14)"),
                this.state.step < 13
                    ? React.createElement("a", { href: "#", id: "next-step", className: "button", onClick: e => this.changeStep(e, 1) }, "Next Step")
                    : React.createElement("a", { href: "#", id: "next-step", className: "button inactive" }, "Next Step"))));
    }
    changeStep(event, change) {
        let tempStep = this.state.step + change;
        this.setState({ step: tempStep });
    }
    // this method updates the character object when changes are observed by components
    // this method is also shit and needs to be refactored but I haven't found an elegant way to do it
    handleCharacterChange(event, attribute, index, objectAttribute) {
        let tempChar = this.state.character;
        let characterAttribute = tempChar[attribute];
        let temp = characterAttribute.constructor.name;
        switch (temp) {
            case "String":
                tempChar[attribute] = event.target.value;
                break;
            case "Number":
                tempChar[attribute] = +event.target.value;
                break;
            case "Boolean":
                tempChar[attribute] = !!event.target.value;
                break;
            case "Array":
                characterAttribute = characterAttribute[index];
                temp = characterAttribute.constructor.name;
                switch (temp) {
                    case "Aptitude":
                        characterAttribute = characterAttribute[objectAttribute];
                        temp = characterAttribute.constructor.name;
                        if (temp.constructor.name == "number") {
                            tempChar[attribute][index][objectAttribute] = +event.target.value;
                        }
                        else {
                            tempChar[attribute][index][objectAttribute] = event.target.value;
                        }
                        break;
                    case "Sleight":
                        // not implemented
                        break;
                    case "Number":
                        tempChar[attribute][index] = +event.target.value;
                    case "String":
                        tempChar[attribute][index] = event.target.value;
                        break;
                    case "Skill":
                        break;
                }
                break;
            case "Morph":
                break;
        }
        tempChar = tempChar;
        tempChar.finalAptitudes = tempChar.GetFinalAptitudes(tempChar.egoAptitudes, tempChar.morph);
        tempChar.derivedStats = new derivedStats_1.DerivedStats(tempChar.finalAptitudes);
        this.setState({ character: tempChar });
    }
    renderCreationStep(step) {
        let creationStep = [
            // pass current backgroundObject & function to change background Object
            React.createElement(_01_background_component_1.default, { HandleSelectionChange: this.handleBackgroundChange, selectedOption: this.state.selectedBackground, selectorName: "background" }),
            React.createElement(_02_career_component_1.default, { HandleSelectionChange: this.handleCareerChange, selectedOption: this.state.selectedCareer, selectorName: "career" }),
            React.createElement(_03_interest_component_1.default, { HandleSelectionChange: this.handleInterestChange, selectedOption: this.state.selectedInterest, selectorName: "interest" })
        ];
        return creationStep[step];
    }
    handleBackgroundChange(object) {
        let tempChar = this.state.character;
        tempChar.SetBackground(object);
        this.setState((state) => ({ character: tempChar }));
        this.setState((state) => ({ selectedBackground: object }));
    }
    handleCareerChange(object) {
        let tempChar = this.state.character;
        tempChar.SetCareer(object);
        this.setState((state) => ({ character: tempChar }));
        this.setState((state) => ({ selectedCareer: object }));
    }
    handleInterestChange(object) {
        let tempChar = this.state.character;
        tempChar.SetInterest(object);
        this.setState((state) => ({ character: tempChar }));
        this.setState((state) => ({ selectedInterest: object }));
    }
}
exports.default = Generator;
var creationState;
(function (creationState) {
    creationState[creationState["Background"] = 0] = "Background";
    creationState[creationState["Career"] = 1] = "Career";
    creationState[creationState["Interest"] = 2] = "Interest";
    creationState[creationState["Faction"] = 3] = "Faction";
    creationState[creationState["Aptitude Template"] = 4] = "Aptitude Template";
    creationState[creationState["Skills"] = 5] = "Skills";
    creationState[creationState["Languages"] = 6] = "Languages";
    creationState[creationState["Flex"] = 7] = "Flex";
    creationState[creationState["Reputation"] = 8] = "Reputation";
    creationState[creationState["Customisation"] = 9] = "Customisation";
    creationState[creationState["Derived Stats"] = 10] = "Derived Stats";
    creationState[creationState["Starting Morph and Gear"] = 11] = "Starting Morph and Gear";
    creationState[creationState["Motivation"] = 12] = "Motivation";
    creationState[creationState["Review"] = 13] = "Review";
})(creationState || (creationState = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
class CharacterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCharacterSheet: false
        };
    }
    render() {
        return (React.createElement("div", { className: "character" },
            React.createElement("a", { href: "#", className: "toggle-sheet", onClick: e => this.toggleCharacterSheet(e) }, this.state.showCharacterSheet ? 'hide sheet' : 'show sheet'),
            this.state.showCharacterSheet ?
                React.createElement("div", { className: "character-sheet" },
                    React.createElement("div", { className: "character-basics" },
                        React.createElement("div", { className: "basics-element" },
                            React.createElement("div", { className: "basics-key" }, "Name:"),
                            React.createElement("div", { className: "basics-value" }, this.props.character.name)),
                        React.createElement("div", { className: "basics-element" },
                            React.createElement("div", { className: "basics-key" }, "Motivations: "),
                            React.createElement("div", { className: "basics-value" }, this.props.character.motivation))),
                    React.createElement("div", { className: "aptitude-block" },
                        this.generateAptitudeLine(true, this.props.character.egoAptitudes, "Ego", "egoAptitudes"),
                        this.generateAptitudeLine(false, this.props.character.morph.aptitudes, "Morph", "morph", "aptitudes"),
                        this.generateAptitudeLine(false, this.props.character.finalAptitudes, "Final", "finalAptitudes")))
                : null));
    }
    ;
    generateAptitudeLine(showAptitudeName, aptitudes, linePrefix, characterAttribute, characterObjectAttribute) {
        const aptitudeElements = aptitudes.map((number, index) => this.generateAptitudeElement(showAptitudeName, index, aptitudeValues[index], aptitudes[index].rating.toString(), characterAttribute, characterObjectAttribute));
        return (React.createElement("div", { className: "aptitude-collection" },
            React.createElement("div", { className: "prefix" },
                showAptitudeName ? React.createElement("div", { className: "line-prefix blank" }) : null,
                linePrefix ? React.createElement("div", { className: "line-prefix" }, linePrefix) : null),
            aptitudeElements));
    }
    // key is a unique identifier so React can properly update certain parts
    generateAptitudeElement(showAptitudeName, key, fullName, value, characterAttribute, characterObjectAttribute) {
        return (React.createElement("div", { className: "aptitude-element", key: key },
            showAptitudeName ? React.createElement("div", { className: "aptitude-name" },
                React.createElement("div", { className: "aptitude-shorthand" }, fullName.slice(0, 3)),
                React.createElement("div", { className: "aptitude-fullname" }, fullName)) : null,
            React.createElement("div", { className: "aptitude-value" }, value)));
    }
    toggleCharacterSheet(event) {
        this.setState({ showCharacterSheet: !this.state.showCharacterSheet });
    }
}
exports.default = CharacterComponent;
var aptitudeValues;
(function (aptitudeValues) {
    aptitudeValues[aptitudeValues["cognition"] = 0] = "cognition";
    aptitudeValues[aptitudeValues["coordination"] = 1] = "coordination";
    aptitudeValues[aptitudeValues["intuition"] = 2] = "intuition";
    aptitudeValues[aptitudeValues["reflexes"] = 3] = "reflexes";
    aptitudeValues[aptitudeValues["savvy"] = 4] = "savvy";
    aptitudeValues[aptitudeValues["somatics"] = 5] = "somatics";
    aptitudeValues[aptitudeValues["willpower"] = 6] = "willpower";
})(aptitudeValues || (aptitudeValues = {}));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data = __webpack_require__(10);
const selector_dropdown_1 = __webpack_require__(2);
const helper_1 = __webpack_require__(1);
class BackgroundComponent extends selector_dropdown_1.default {
    constructor(props) {
        super(props);
        this.selectorData = data.background;
        if (!helper_1.default.isEmptyObject(this.props.selectedOption)) {
            this.UpdateSelection(this.props.selectedOption.name);
        }
    }
}
exports.default = BackgroundComponent;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"background":[{"name":"Colonist","description":"You were an original settler of Earth orbit, Luna, Mars, or a smaller outpost elsewhere, before the Fall.","skill":[{"name":"Free Fall","field":[],"attribute":"SOM","rating":40,"type":["Active","Physical"]},{"name":"Hardware","field":[],"fieldOptions":["Aerospace","Electronics","Industrial"],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Interface","field":[],"attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Pilot","field":[],"fieldOptions":["Air","Ground","Nautical","Space"],"attribute":"REF","rating":30,"type":["Active","Vehicle"]},{"name":"Survival","field":[],"attribute":"INT","rating":30,"type":["Active","Mental"]},{"name":"Know","field":[],"fieldOptions":["Administration","Flight Crew Ops","Hab Ops"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Botany","Chemistry","Engineering","Physics"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Enclaver","description":"On Earth, you lived a life of precarious but protected stability in a defended enclave.","skill":[{"name":"Athletics","field":[],"attribute":"SOM","rating":40,"type":["Active","Physical"]},{"name":"Interface","field":[],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Pilot","field":[],"fieldOptions":["Ground"],"attribute":"REF","rating":20,"type":["Active","Vehicle"]},{"name":"Program","field":[],"attribute":"COG","rating":20,"type":["Active","Technical"]},{"name":"Know","field":[],"fieldOptions":["Celebrity Gossip","Pop Culture","Sports"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Economics","Education","Psychology"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Freelancer","description":"You were a cog in the wheels of hypercapitalism, taking whatever gigs came your way.","skill":[{"name":"Interface","field":[],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Program","field":[],"attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Research","field":[],"attribute":"INT","rating":40,"type":["Active","Technical"]},{"name":"Know","field":[],"fieldOptions":["Accounting","Data Processing","Freelancing"],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Craft Beers","Music (choose a genre)","Sports"],"attribute":"INT","rating":30,"type":["Know"]}]},{"name":"Hyperelite","description":"You lived in the top percent, with abundant wealth and resources.","skill":[{"name":"Athletics","field":[],"attribute":"SOM","rating":30,"type":["Active","Physical"]},{"name":"Deceive","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":50,"type":["Active","Social"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Provoke","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Know","field":[],"fieldOptions":["Economics","Law","Political Science"],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Fine Art","Hypercorp Politics","Stock Market"],"attribute":"INT","rating":30,"type":["Know"]}]}]}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(12);
exports.encode = exports.stringify = __webpack_require__(13);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data = __webpack_require__(15);
const selector_dropdown_1 = __webpack_require__(2);
const helper_1 = __webpack_require__(1);
class CareerComponent extends selector_dropdown_1.default {
    constructor(props) {
        super(props);
        this.selectorData = data.career;
        if (!helper_1.default.isEmptyObject(this.props.selectedOption)) {
            this.UpdateSelection(this.props.selectedOption.name);
        }
    }
}
exports.default = CareerComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"career":[{"name":"Academic","description":"You devote your efforts to the pursuit of knowledge.","skill":[{"name":"Interface","field":[],"attribute":"COG","rating":30,"type":[" Active","Technical "]},{"name":"Research","field":[],"fieldOptions":["Aerospace","Electronics","Industrial"],"attribute":"COG","rating":60,"type":["Active","Technical"]},{"name":"Know","field":[],"fieldOptions":["Any"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Any"],"attribute":"INT","rating":40,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Any"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Covert Operative","description":"You are a spy, infiltrator, thief, or undercover agent, skilled at accessing places you don’t belong.","skill":[{"name":"Deceive","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Infiltrate","field":[],"attribute":"REF","rating":60,"type":["Active","Physical"]},{"name":"Infosec","field":[],"attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Know","field":[],"fieldOptions":["Security Ops","Smuggling","Spycraft"],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Black Markets","Current Events","Politics"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Enforcer ","description":"You are a spy, infiltrator, thief, or undercover agent, skilled at accessing places you don’t belong.","skill":[{"name":"Fray","field":[],"attribute":"SOM","rating":30,"type":["Active","Combat"]},{"name":"Guns","field":[],"attribute":"REF","rating":20,"type":["Active","Combat"]},{"name":"Melee","field":[],"attribute":"SOM","rating":50,"type":["Active","Combat"]},{"name":"Provoke","field":[],"attribute":"SAV","rating":30,"type":["Active","Social "]},{"name":"Know","field":[],"fieldOptions":["Bodyguarding","Racketeering","Security Ops"],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Cartel Politics","Gambling","Night Clubs "],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Explorer","description":"You’ve walked on alien worlds and seen things with your own eyes that others wouldn’t believe","skill":[{"name":"Athletics","field":[],"attribute":"SOM","rating":30,"type":["Active","Physical"]},{"name":"Medicine","field":[],"fieldOptions":["Paramedic"],"attribute":"COG","rating":20,"type":[" Active","Field","Technical"]},{"name":"Pilot","field":[],"fieldOptions":["Air","Ground","Nautical","Space"],"attribute":"REF","rating":20,"type":["Active","Vehicle"]},{"name":"Survival","field":[],"attribute":"INT","rating":60,"type":[" Active","Physical "]},{"name":"Know","field":[],"fieldOptions":["First-Contact Ops","Gatecrashing","Surveying "],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know","field":[],"fieldOptions":["Astrobiology","Geology","Xenoarcheology"],"attribute":"COG","rating":30,"type":["Know"]}]}]}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data = __webpack_require__(17);
const selector_dropdown_1 = __webpack_require__(2);
const helper_1 = __webpack_require__(1);
class InterestComponent extends selector_dropdown_1.default {
    constructor(props) {
        super(props);
        this.selectorData = data.interest;
        if (!helper_1.default.isEmptyObject(this.props.selectedOption)) {
            this.UpdateSelection(this.props.selectedOption.name);
        }
    }
}
exports.default = InterestComponent;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"interest":[{"name":"Animal Handler","description":"You’ve learned to raise, train, and care for animals, particularly partially uplifted smart animals.","skill":[{"name":"Exotic Skill:","field":[],"fieldOptions":["Animal Handling"],"attribute":"SAV","rating":40,"type":["Active","Physical"]},{"name":"Medicine","field":[],"fieldOptions":["Veterinary"],"attribute":"COG","rating":40,"type":[" Active","Field","Technical"]},{"name":"Provoke","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Know","field":[],"fieldOptions":["Smart Animals"],"attribute":"COG","rating":40,"type":["Know"]}]},{"name":"Artist/Icon","description":"You are a musician, performer, celebrity, or other type of creative or public figure.","skill":[{"name":"Deceive","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Provoke","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Know","field":[],"fieldOptions":[" Dance","Music","Sculpture"],"attribute":"INT","rating":40,"type":["Know"]}]},{"name":"Async","description":"You are infected with the Watts-MacLeod strain of the exsurgent virus (p. XX), which gives you a number of unique mental talents and disadvantages. You must purchase the Psi trait in Step 10.","skill":[{"name":"Deceive","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Perceive","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Psi","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Know","field":[],"fieldOptions":["Any"],"attribute":"INT","rating":40,"type":["Know"]}]},{"name":"Commander","description":"You are accustomed to leadership roles as an executive, officer, elected official, or autonomist organizer.","skill":[{"name":"Interface","field":[],"attribute":"COG","rating":20,"type":["Active","Technical"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Provoke","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Know","field":[],"fieldOptions":["Administration"],"attribute":"COG","rating":40,"type":["Know"]}]}]}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = __webpack_require__(19);
const aptitude_1 = __webpack_require__(3);
const morph_1 = __webpack_require__(20);
const derivedStats_1 = __webpack_require__(4);
const selection_1 = __webpack_require__(21);
class Character {
    constructor(name, concept, motivation, languages, isAsync, psiLevel, morph) {
        this.background = new Array(3);
        this.egoAptitudes = [];
        this.finalAptitudes = [];
        this.reputation = [];
        this.skills = [];
        this.gear = [];
        this.pools = [];
        this.chiSleights = [];
        this.gammaSleights = [];
        this.name = name;
        this.concept = concept;
        this.motivation = motivation;
        this.languages = languages;
        this.isAsync = isAsync;
        this.psiLevel = psiLevel;
        if (!morph) {
            let morphAptitudes = [];
            for (let i = 0; i < 7; i++) {
                morphAptitudes.push(new aptitude_1.Aptitude(aptitudeValues[i], 0));
            }
            this.morph = new morph_1.Morph("flat", false, "none", 20, 30, "none", "none", 0, 5000, morphAptitudes);
        }
        else {
            this.morph = morph;
        }
        for (let i = 0; i < 7; i++) {
            let tempAptitude = new aptitude_1.Aptitude(aptitudeValues[i], 15);
            this.egoAptitudes.push(tempAptitude);
        }
        this.finalAptitudes = this.GetFinalAptitudes(this.egoAptitudes, this.morph);
        this.derivedStats = new derivedStats_1.DerivedStats(this.finalAptitudes);
    }
    GetFinalAptitudes(aptitudeOne, morph) {
        if (aptitudeOne.length == morph.aptitudes.length) {
            let tempAptitudes = [];
            for (let i = 0; i < aptitudeOne.length; i++) {
                const newRating = (+aptitudeOne[i].rating + +morph.aptitudes[i].rating) > morph.aptitudeMaximum ?
                    morph.aptitudeMaximum : +aptitudeOne[i].rating + +morph.aptitudes[i].rating;
                tempAptitudes.push(new aptitude_1.Aptitude(aptitudeOne[i].fullName, newRating));
            }
            return tempAptitudes;
        }
        else {
            console.log("Warning: Aptitude arrays are not of equal size. No addition performed.");
            return aptitudeOne;
        }
    }
    SetBackground(background) {
        let skills = [];
        for (let i = 0; i < background.skill.length; i++) {
            let json = background.skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill = new skill_1.Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill);
            }
        }
        this.background[0] = new selection_1.Selection(background.name, background.description, skills);
    }
    SetCareer(career) {
        let skills = [];
        for (let i = 0; i < career.skill.length; i++) {
            let json = career.skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill = new skill_1.Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill);
            }
        }
        this.background[1] = new selection_1.Selection(career.name, career.description, skills);
    }
    SetInterest(interest) {
        let skills = [];
        for (let i = 0; i < interest.skill.length; i++) {
            let json = interest.skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill = new skill_1.Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill);
            }
        }
        this.background[2] = new selection_1.Selection(interest.name, interest.description, skills);
    }
    SetFaction(faction) {
        this.faction = faction;
    }
}
exports.Character = Character;
var aptitudeValues;
(function (aptitudeValues) {
    aptitudeValues[aptitudeValues["cognition"] = 0] = "cognition";
    aptitudeValues[aptitudeValues["coordination"] = 1] = "coordination";
    aptitudeValues[aptitudeValues["intuition"] = 2] = "intuition";
    aptitudeValues[aptitudeValues["reflexes"] = 3] = "reflexes";
    aptitudeValues[aptitudeValues["savvy"] = 4] = "savvy";
    aptitudeValues[aptitudeValues["somatics"] = 5] = "somatics";
    aptitudeValues[aptitudeValues["willpower"] = 6] = "willpower";
})(aptitudeValues || (aptitudeValues = {}));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Skill {
    constructor(name, aptitude, rating, type, specializations) {
        this.type = [];
        this.specializations = [];
        this.name = name;
        this.linkedAptitude = aptitude;
        this.rating = rating;
        this.type = type;
        this.specializations = specializations;
    }
    AddSpecialization(newSpecialization) {
        this.specializations.push(newSpecialization);
    }
    RemoveSpecialization(oldSpecialization) {
        if (this.specializations.length > 0) {
            var index = this.specializations.indexOf(oldSpecialization, 0);
            if (index > -1) {
                this.specializations.splice(index, 1);
            }
        }
    }
}
exports.Skill = Skill;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Morph {
    constructor(name, isSynthMorph, ware, aptitudeMaximum, durability, advantages, disadvantages, cpCost, creditCost, aptitudes) {
        this.name = name;
        this.isSynthMorph = isSynthMorph;
        this.ware = ware;
        this.aptitudeMaximum = aptitudeMaximum;
        this.aptitudes = aptitudes;
        this.durability = durability;
        this.woundThreshold = durability / 5;
        this.deathRating = (isSynthMorph ? durability * 1.5 : durability * 2);
        this.traits = "advantages: " + advantages + ", disadvantages: " + disadvantages;
        this.cpCost = cpCost;
        this.creditCost = creditCost;
    }
}
exports.Morph = Morph;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Selection {
    constructor(name, description, skills) {
        this.skills = [];
        this.name = name;
        this.description = description;
        this.skills = skills;
    }
}
exports.Selection = Selection;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map