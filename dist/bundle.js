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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
class Aptitude {
    constructor(name, rating) {
        this.fullName = name;
        this.shortHand = name.slice(0, 3);
        this.rating = rating;
    }
}
exports.Aptitude = Aptitude;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const aptitude_1 = __webpack_require__(1);
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(4);
const generator_1 = __webpack_require__(5);
ReactDOM.render(React.createElement(generator_1.default, { compiler: "TypeScript", framework: "React" }), document.getElementById("container"));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
const character_component_1 = __webpack_require__(6);
const character_outline_component_1 = __webpack_require__(7);
const _01_background_component_1 = __webpack_require__(8);
const _02_career_component_1 = __webpack_require__(10);
const character_1 = __webpack_require__(12);
const derivedStats_1 = __webpack_require__(2);
class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: new character_1.Character("", "", "", "", false, 0),
            step: 0,
            selectedBackground: ""
        };
        this.handleCharacterChange = this.handleCharacterChange.bind(this);
        this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "generator" },
            React.createElement(character_component_1.default, { character: this.state.character, handleCharacterChange: this.handleCharacterChange }),
            React.createElement(character_outline_component_1.default, { character: this.state.character, selectBackground: this.handleBackgroundChange }),
            this.renderCreationStep(this.state.step),
            React.createElement("div", null, this.state.selectedBackground),
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
            React.createElement(_01_background_component_1.default, { handleBackgroundChange: this.handleBackgroundChange, selectedBackground: this.state.selectedBackground }),
            React.createElement(_02_career_component_1.default, null)
        ];
        return creationStep[step];
    }
    handleBackgroundChange(object) {
        let tempChar = this.state.character;
        tempChar.SetBackground(object);
        this.setState((state) => ({ character: tempChar }));
        let newBackground = object[0].name;
        this.setState((state) => ({ selectedBackground: newBackground }));
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(0);
class CharacterOutlineComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: "creation-step" },
            React.createElement("div", { className: "creation-element" },
                React.createElement("div", { className: "creation-key" }, "Character Name:"),
                React.createElement("input", { type: "text", className: "creation-value", value: this.props.character.name, onChange: e => this.props.handleCharacterChange(e, "name") })),
            React.createElement("div", { className: "creation-element" },
                React.createElement("div", { className: "creation-key" }, "Character Concept:"),
                React.createElement("input", { type: "text", className: "creation-value", value: this.props.character.name, onChange: e => this.props.handleCharacterChange(e, "name") }))));
    }
}
exports.default = CharacterOutlineComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings.d.ts" />
const React = __webpack_require__(0);
const data = __webpack_require__(9);
class BackgroundComponent extends React.Component {
    constructor(props) {
        super(props);
        this.backgroundData = data.background;
    }
    render() {
        const word = data.background;
        return React.createElement("div", { className: "background-selection" },
            React.createElement("select", { defaultValue: this.props.selectedBackground, onChange: e => this.UpdateBackgroundSelection(e.target.value), id: "background-selector" }, this.GetBackgroundList()),
            this.ShowBackgroundChoice());
    }
    UpdateBackgroundSelection(backgroundName) {
        this.props.handleBackgroundChange(this.GetBackgroundData(backgroundName));
    }
    GetBackgroundList() {
        let backgroundOptions = [];
        backgroundOptions.push(React.createElement("option", { key: "default", className: "hidden-select", value: "default" }, "Select one"));
        for (var i = 0; i < this.backgroundData.length; i++) {
            backgroundOptions.push(React.createElement("option", { key: this.backgroundData[i].name, value: this.backgroundData[i].name }, this.backgroundData[i].name));
        }
        return backgroundOptions;
    }
    GetBackgroundData(backgroundName) {
        return this.backgroundData.filter(function (object) {
            return object["name"] === backgroundName;
        });
    }
    ShowBackgroundChoice() {
        let backgroundData = this.GetBackgroundData(this.props.selectedBackground)[0];
        return (React.createElement("div", null, this.props.selectedBackground
            ? React.createElement("div", { className: "background-choice" },
                React.createElement("div", { className: "background-description" }, backgroundData.description),
                React.createElement("div", { className: "background-skills" }, this.ShowBackgroundSkills(backgroundData)))
            : React.createElement("div", { className: "background-help" }, "Choose a background via the selector.")));
    }
    ShowBackgroundSkills(backgroundData) {
        let backgroundSkills = [];
        backgroundSkills.push(React.createElement("div", { key: 'header', className: "background-skill" },
            React.createElement("div", { className: "skill header name" }, "Skill"),
            React.createElement("div", { className: "skill header attribute" }, "Linked Attribute"),
            React.createElement("div", { className: "skill header rating" }, "Rating"),
            React.createElement("div", { className: "skill header types" }, "Type")));
        for (let i = 0; i < backgroundData.skill.length; i++) {
            let skill = backgroundData.skill[i];
            let skillTypes = skill.type.map(function (type) {
                return React.createElement("div", { key: type, className: "skill type" }, type);
            });
            backgroundSkills.push(React.createElement("div", { key: skill.name + i, className: "background-skill" },
                this.GetFieldSelector(skill),
                React.createElement("div", { className: "skill attribute" }, skill.attribute),
                React.createElement("div", { className: "skill rating" }, skill.rating),
                React.createElement("div", { className: "skill types" }, skillTypes)));
        }
        return backgroundSkills;
    }
    GetFieldSelector(skill) {
        let fieldOptions = [];
        if (skill.field.length > 0) {
            for (let o = 0; o < skill.field.length; o++) {
                fieldOptions.push(React.createElement("option", { key: skill.field[o], value: skill.field[o] },
                    skill.name,
                    " ",
                    skill.field[o]));
            }
            return (React.createElement("select", { onChange: e => this.UpdateFieldSelection(e.target.value), id: "field-selector", className: "skill identity" }, fieldOptions));
        }
        else {
            return React.createElement("div", { className: "skill identity" }, skill.name);
        }
    }
    UpdateFieldSelection(event) {
    }
}
exports.default = BackgroundComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"background":[{"name":"Colonist","description":"You were an original settler of Earth orbit, Luna, Mars, or a smaller outpost elsewhere, before the Fall.","skill":[{"name":"Free Fall","field":[],"attribute":"SOM","rating":40,"type":["Active","Physical"]},{"name":"Hardware","field":["Aerospace","Electronics","Industrial"],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Interface","field":[],"attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Pilot","field":["Air","Ground","Nautical","Space"],"attribute":"REF","rating":30,"type":["Active","Vehicle"]},{"name":"Survival","field":[],"attribute":"INT","rating":30,"type":["Active","Mental"]},{"name":"Know","field":["Administration","Flight Crew Ops","Hab Ops"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know","field":["Botany","Chemistry","Engineering","Physics"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Enclaver","description":"On Earth, you lived a life of precarious but protected stability in a defended enclave.","skill":[{"name":"Athletics","field":[],"attribute":"SOM","rating":40,"type":["Active","Physical"]},{"name":"Interface","field":[],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Pilot:","field":["Ground"],"attribute":"REF","rating":20,"type":["Active","Vehicle"]},{"name":"Program","field":[],"attribute":"COG","rating":20,"type":["Active","Technical"]},{"name":"Know:","field":["Celebrity Gossip","Pop Culture","Sports"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know:","field":["Economics","Education","Psychology"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Freelancer","description":"You were a cog in the wheels of hypercapitalism, taking whatever gigs came your way.","skill":[{"name":"Interface","field":[],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":20,"type":["Active","Social"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":40,"type":["Active","Social"]},{"name":"Program","field":[],"attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Research","field":[],"attribute":"INT","rating":40,"type":["Active","Technical"]},{"name":"Know:","field":["Accounting","Data Processing","Freelancing"],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know:","field":["Craft Beers","Music (choose a genre)","Sports"],"attribute":"INT","rating":30,"type":["Know"]}]},{"name":"Hyperelite","description":"You lived in the top percent, with abundant wealth and resources.","skill":[{"name":"Athletics","field":[],"attribute":"SOM","rating":30,"type":["Active","Physical"]},{"name":"Deceive","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Kinesics","field":[],"attribute":"SAV","rating":50,"type":["Active","Social"]},{"name":"Persuade","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Provoke","field":[],"attribute":"SAV","rating":30,"type":["Active","Social"]},{"name":"Know:","field":["Economics","Law","Political Science"],"attribute":"COG","rating":60,"type":["Know"]},{"name":"Know:","field":["Fine Art","Hypercorp Politics","Stock Market"],"attribute":"INT","rating":30,"type":["Know"]}]}]}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings.d.ts" />
const React = __webpack_require__(0);
const data = __webpack_require__(11);
class CareerComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const word = data.name;
        console.log(word);
        return React.createElement("div", null, " \"Career!\" ");
    }
}
exports.default = CareerComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"background":[{"name":"Colonist","description":"You were an original settler of Earth orbit, Luna, Mars, or a smaller outpost elsewhere, before the Fall.","skill":[{"name":"Free Fall","attribute":"SOM","rating":40,"type":["Active","Physical"]},{"name":"Hardware","field":["Aerospace","Electronics","Industrial"],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Interface","attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Pilot","field":["Air","Ground","Nautical","Space"],"attribute":"REF","rating":30,"type":["Active","Vehicle"]},{"name":"Survival","attribute":"INT","rating":30,"type":["Active","Mental"]},{"name":"Know","field":["Administration","Flight Crew Ops","Hab Ops"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know","field":["Botany","Chemistry","Engineering","Physics"],"attribute":"COG","rating":30,"type":["Know"]}]},{"name":"Enclaver ","description":"On Earth, you lived a life of precarious but protected stability in a defended enclave. ","skill":[{"name":"Free Fall","attribute":"SOM","rating":40,"type":["Active","Physical"]},{"name":"Hardware","field":["Aerospace","Electronics","Industrial"],"attribute":"COG","rating":40,"type":["Active","Technical"]},{"name":"Interface","attribute":"COG","rating":30,"type":["Active","Technical"]},{"name":"Pilot","field":["Air","Ground","Nautical","Space"],"attribute":"REF","rating":30,"type":["Active","Vehicle"]},{"name":"Survival","attribute":"INT","rating":30,"type":["Active","Mental"]},{"name":"Know","field":["Administration","Flight Crew Ops","Hab Ops"],"attribute":"INT","rating":60,"type":["Know"]},{"name":"Know","field":["Botany","Chemistry","Engineering","Physics"],"attribute":"COG","rating":30,"type":["Know"]}]}]}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const skill_1 = __webpack_require__(13);
const aptitude_1 = __webpack_require__(1);
const morph_1 = __webpack_require__(14);
const derivedStats_1 = __webpack_require__(2);
const background_1 = __webpack_require__(15);
class Character {
    constructor(name, concept, motivation, languages, isAsync, psiLevel, morph) {
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
        for (let i = 0; i < background[0].skill.length; i++) {
            let json = background[0].skill[i];
            let aptitudeIndex = this.finalAptitudes.findIndex(item => item.shortHand.toUpperCase() === json.attribute.toUpperCase());
            if (aptitudeIndex !== -1) {
                let newSkill = new skill_1.Skill(json.name, this.finalAptitudes[aptitudeIndex], json.rating, json.type, [""]);
                skills.push(newSkill);
            }
        }
        let bg = new background_1.Background(background[0].name, background[0].description, skills);
        this.background = bg;
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Background {
    constructor(name, description, skills) {
        this.skills = [];
        this.name = name;
        this.description = description;
        this.skills = skills;
    }
}
exports.Background = Background;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map