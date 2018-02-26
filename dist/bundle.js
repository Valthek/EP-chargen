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
var Aptitude = /** @class */ (function () {
    function Aptitude(name, rating) {
        this.fullName = name;
        this.shortHand = name.slice(0, 3);
        this.rating = rating;
    }
    return Aptitude;
}());
exports.Aptitude = Aptitude;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aptitude_1 = __webpack_require__(1);
var DerivedStats = /** @class */ (function () {
    function DerivedStats(finalAptitudes, isAsync, psiLevel, chiSleights) {
        this.aptitudeChecks = [];
        this.initiative = (finalAptitudes[2].rating + finalAptitudes[1].rating) / 5;
        for (var i = 0; i < finalAptitudes.length; i++) {
            this.aptitudeChecks[i] = new aptitude_1.Aptitude(finalAptitudes[i].fullName, finalAptitudes[i].rating * 3);
        }
        this.lucidity = finalAptitudes[5].rating * 2;
        this.traumaThreshold = Math.round(this.lucidity / 5);
        this.insanityRating = this.lucidity * 2;
        this.infectionRating = isAsync ? (psiLevel * 10) + (chiSleights * 5) : 0;
    }
    return DerivedStats;
}());
exports.DerivedStats = DerivedStats;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(4);
var generator_1 = __webpack_require__(5);
ReactDOM.render(React.createElement(generator_1.default, { compiler: "TypeScript", framework: "React" }), document.getElementById("container"));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var character_component_1 = __webpack_require__(6);
var character_outline_component_1 = __webpack_require__(7);
var _01_background_component_1 = __webpack_require__(8);
var _02_career_component_1 = __webpack_require__(10);
var character_1 = __webpack_require__(12);
var derivedStats_1 = __webpack_require__(2);
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super);
    function Generator(props) {
        var _this = _super.call(this, props) || this;
        _this.creationStep = [React.createElement(_01_background_component_1.default, null), React.createElement(_02_career_component_1.default, null)];
        _this.state = {
            character: new character_1.Character("", "", "", "", false, 0),
            step: 0
        };
        _this.handleCharacterChange = _this.handleCharacterChange.bind(_this);
        return _this;
    }
    Generator.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "generator" },
            React.createElement(character_component_1.default, { character: this.state.character, handleCharacterChange: this.handleCharacterChange }),
            React.createElement(character_outline_component_1.default, { character: this.state.character, selectBackground: this.handleBackgroundChange, selectFaction: this.handleFactionChange }),
            this.creationStep[this.state.step],
            this.state.step > 0
                ? React.createElement("a", { href: "#", id: "previous-step", onClick: function (e) { return _this.changeStep(e, -1); } }, "Previous Step")
                : React.createElement("a", { href: "#", id: "previous-step" }, "Previous Step"),
            creationState[this.state.step],
            this.state.step < 13
                ? React.createElement("a", { href: "#", id: "next-step", onClick: function (e) { return _this.changeStep(e, 1); } }, "Move along citizen")
                : React.createElement("a", { href: "#", id: "next-step" }, "Next Step")));
    };
    Generator.prototype.changeStep = function (event, change) {
        var tempStep = this.state.step + change;
        this.setState({ step: tempStep });
    };
    // this method updates the character object when changes are observed by components
    // this method is also shit and needs to be refactored but I haven't found an elegant way to do it
    Generator.prototype.handleCharacterChange = function (event, attribute, index, objectAttribute) {
        var tempChar = this.state.character;
        var characterAttribute = tempChar[attribute];
        var temp = characterAttribute.constructor.name;
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
    };
    Generator.prototype.handleBackgroundChange = function (event) {
    };
    Generator.prototype.handleFactionChange = function (event) {
    };
    return Generator;
}(React.Component));
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CharacterComponent = /** @class */ (function (_super) {
    __extends(CharacterComponent, _super);
    function CharacterComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showCharacterSheet: false
        };
        return _this;
    }
    CharacterComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "character" },
            React.createElement("a", { href: "#", className: "toggle-sheet", onClick: function (e) { return _this.toggleCharacterSheet(e); } }, this.state.showCharacterSheet ? 'hide sheet' : 'show sheet'),
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
    };
    ;
    CharacterComponent.prototype.generateAptitudeLine = function (showAptitudeName, aptitudes, linePrefix, characterAttribute, characterObjectAttribute) {
        var _this = this;
        var aptitudeElements = aptitudes.map(function (number, index) {
            return _this.generateAptitudeElement(showAptitudeName, index, aptitudeValues[index], aptitudes[index].rating.toString(), characterAttribute, characterObjectAttribute);
        });
        return (React.createElement("div", { className: "aptitude-collection" },
            React.createElement("div", { className: "prefix" },
                showAptitudeName ? React.createElement("div", { className: "line-prefix blank" }) : null,
                linePrefix ? React.createElement("div", { className: "line-prefix" }, linePrefix) : null),
            aptitudeElements));
    };
    // key is a unique identifier so React can properly update certain parts
    CharacterComponent.prototype.generateAptitudeElement = function (showAptitudeName, key, fullName, value, characterAttribute, characterObjectAttribute) {
        return (React.createElement("div", { className: "aptitude-element", key: key },
            showAptitudeName ? React.createElement("div", { className: "aptitude-name" },
                React.createElement("div", { className: "aptitude-shorthand" }, fullName.slice(0, 3)),
                React.createElement("div", { className: "aptitude-fullname" }, fullName)) : null,
            React.createElement("div", { className: "aptitude-value" }, value)));
    };
    CharacterComponent.prototype.toggleCharacterSheet = function (event) {
        this.setState({ showCharacterSheet: !this.state.showCharacterSheet });
    };
    return CharacterComponent;
}(React.Component));
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

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CharacterOutlineComponent = /** @class */ (function (_super) {
    __extends(CharacterOutlineComponent, _super);
    function CharacterOutlineComponent(props) {
        return _super.call(this, props) || this;
    }
    CharacterOutlineComponent.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "creation-step" },
            React.createElement("div", { className: "creation-element" },
                React.createElement("div", { className: "creation-key" }, "Character Name:"),
                React.createElement("input", { type: "text", className: "creation-value", value: this.props.character.name, onChange: function (e) { return _this.props.handleCharacterChange(e, "name"); } })),
            React.createElement("div", { className: "creation-element" },
                React.createElement("div", { className: "creation-key" }, "Character Concept:"),
                React.createElement("input", { type: "text", className: "creation-value", value: this.props.character.name, onChange: function (e) { return _this.props.handleCharacterChange(e, "name"); } })),
            React.createElement("div", { className: "creation-element" },
                React.createElement("div", { className: "creation-key" }, "Character Background:"),
                React.createElement("input", { type: "text", className: "creation-value", value: this.props.character.name, onChange: function (e) { return _this.props.handleCharacterChange(e, "name"); } })),
            React.createElement("div", { className: "creation-element" },
                React.createElement("div", { className: "creation-key" }, "Character Background:"),
                React.createElement("input", { type: "text", className: "creation-value", value: this.props.character.name, onChange: function (e) { return _this.props.handleCharacterChange(e, "name"); } })),
            "2. Choose Background (p.\u00A0131) 3. Choose Faction (p.\u00A0132)"));
    };
    return CharacterOutlineComponent;
}(React.Component));
exports.default = CharacterOutlineComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings.d.ts" />
var React = __webpack_require__(0);
var data = __webpack_require__(9);
var BackgroundComponent = /** @class */ (function (_super) {
    __extends(BackgroundComponent, _super);
    function BackgroundComponent(props) {
        return _super.call(this, props) || this;
    }
    BackgroundComponent.prototype.render = function () {
        var word = data.name;
        console.log(word);
        return React.createElement("div", null, " \"Hello\" ");
    };
    return BackgroundComponent;
}(React.Component));
exports.default = BackgroundComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"name":"testing"}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../../typings.d.ts" />
var React = __webpack_require__(0);
var data = __webpack_require__(11);
var CareerComponent = /** @class */ (function (_super) {
    __extends(CareerComponent, _super);
    function CareerComponent(props) {
        return _super.call(this, props) || this;
    }
    CareerComponent.prototype.render = function () {
        var word = data.name;
        console.log(word);
        return React.createElement("div", null, " \"Career!\" ");
    };
    return CareerComponent;
}(React.Component));
exports.default = CareerComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"skill":[{"name":"Athletics","attribute":"SOM","type":["Active","Physical"]},{"name":"Deceive","attribute":"SAV","type":["Active","Social"]},{"name":"Exotic Skill [Field]","attribute":"—","type":["—"]},{"name":"Fray","attribute":"REF","type":["Active","Combat"]},{"name":"Free Fall","attribute":"SOM","type":["Active","Physical"]},{"name":"Guns","attribute":"REF","type":["Active","Combat"]},{"name":"Hardware: [Field]","attribute":"COG","type":["Active","Technical"]},{"name":"Infiltrate","attribute":"REF","type":["Active","Physical"]},{"name":"Infosec","attribute":"COG","type":["Active","Technical"]},{"name":"Interface","attribute":"COG","type":["Active","Technical"]},{"name":"Kinesics","attribute":"SAV","type":["Active","Social"]},{"name":"Know: [Field]","attribute":"COG/INT","type":["Know"]},{"name":"Medicine: [Field]","attribute":"COG","type":["Active","Technical"]},{"name":"Melee","attribute":"SOM","type":["Active","Combat"]},{"name":"Perceive","attribute":"INT","type":["Active","Mental"]},{"name":"Persuade","attribute":"SAV","type":["Active","Social"]},{"name":"Pilot: [Field]","attribute":"REF","type":["Active","Vehicle"]},{"name":"Program","attribute":"COG","type":["Active","Technical"]},{"name":"Provoke","attribute":"SAV","type":["Active","Social"]},{"name":"Psi","attribute":"WIL","type":["Active","Mental","Psi"]},{"name":"Research","attribute":"INT","type":["Active","Technical"]},{"name":"Survival","attribute":"INT","type":["Active","Mental"]}]}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aptitude_1 = __webpack_require__(1);
var morph_1 = __webpack_require__(13);
var derivedStats_1 = __webpack_require__(2);
var Character = /** @class */ (function () {
    function Character(name, concept, motivation, languages, isAsync, psiLevel, morph) {
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
            var morphAptitudes = [];
            for (var i = 0; i < 7; i++) {
                morphAptitudes.push(new aptitude_1.Aptitude(aptitudeValues[i], 0));
            }
            this.morph = new morph_1.Morph("flat", false, "none", 20, 30, "none", "none", 0, 5000, morphAptitudes);
        }
        else {
            this.morph = morph;
        }
        for (var i = 0; i < 7; i++) {
            var tempAptitude = new aptitude_1.Aptitude(aptitudeValues[i], 15);
            this.egoAptitudes.push(tempAptitude);
        }
        this.finalAptitudes = this.GetFinalAptitudes(this.egoAptitudes, this.morph);
        this.derivedStats = new derivedStats_1.DerivedStats(this.finalAptitudes);
    }
    Character.prototype.GetFinalAptitudes = function (aptitudeOne, morph) {
        if (aptitudeOne.length == morph.aptitudes.length) {
            var tempAptitudes = [];
            for (var i = 0; i < aptitudeOne.length; i++) {
                var newRating = (+aptitudeOne[i].rating + +morph.aptitudes[i].rating) > morph.aptitudeMaximum ?
                    morph.aptitudeMaximum : +aptitudeOne[i].rating + +morph.aptitudes[i].rating;
                tempAptitudes.push(new aptitude_1.Aptitude(aptitudeOne[i].fullName, newRating));
            }
            return tempAptitudes;
        }
        else {
            console.log("Warning: Aptitude arrays are not of equal size. No addition performed.");
            return aptitudeOne;
        }
    };
    Character.prototype.SetBackground = function (background) {
        this.background = background;
    };
    Character.prototype.SetFaction = function (faction) {
        this.faction = faction;
    };
    return Character;
}());
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
var Morph = /** @class */ (function () {
    function Morph(name, isSynthMorph, ware, aptitudeMaximum, durability, advantages, disadvantages, cpCost, creditCost, aptitudes) {
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
    return Morph;
}());
exports.Morph = Morph;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map