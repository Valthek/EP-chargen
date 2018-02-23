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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var generator_1 = __webpack_require__(3);
ReactDOM.render(React.createElement(generator_1.default, { compiler: "TypeScript", framework: "React" }), document.getElementById("container"));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
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
var character_component_1 = __webpack_require__(4);
var character_1 = __webpack_require__(5);
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super);
    function Generator(props) {
        var _this = _super.call(this, props) || this;
        _this.char = new character_1.Character();
        _this.state = {
            step: 0
        };
        return _this;
    }
    Generator.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "generator" },
            React.createElement(character_component_1.default, { value: "Test", character: this.char }),
            this.state.step > 0 ? React.createElement("button", { id: "previous-step", onClick: function (e) { return _this.changeStep(e, -1); } }, "Step back citizen ") : null,
            this.state.step < 14 ? React.createElement("button", { id: "next-step", onClick: function (e) { return _this.changeStep(e, 1); } }, "Move along citizen") : null));
    };
    Generator.prototype.changeStep = function (event, change) {
        var tempStep = this.state.step + change;
        this.setState({ step: tempStep });
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
/* 4 */
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
        return _super.call(this, props) || this;
    }
    CharacterComponent.prototype.render = function () {
        return (React.createElement("div", { className: "character" },
            React.createElement("div", { className: "character-basics" },
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Character"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.character.name })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Faction"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.character.faction })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Motivations"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.character.motivation })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Languages"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.character.languages }))),
            React.createElement("div", { className: "aptitude-block" },
                generateAptitudeLine(true, this.props.character.egoAptitudes, "Ego"),
                generateAptitudeLine(false, this.props.character.morph.aptitudes, "Morph"),
                generateAptitudeLine(false, this.props.character.finalAptitudes, "Final"))));
    };
    ;
    return CharacterComponent;
}(React.Component));
exports.default = CharacterComponent;
function generateAptitudeLine(showAptitudeName, aptitudes, linePrefix) {
    var aptitudeElements = aptitudes.map(function (number, index) {
        return generateAptitudeElement(showAptitudeName, index, aptitudeValues[index].slice(0, 3), aptitudeValues[index], aptitudes[index].rating.toString());
    });
    return (React.createElement("div", { className: "aptitude-collection" },
        React.createElement("div", { className: "prefix" },
            showAptitudeName ? React.createElement("div", { className: "line-prefix blank" }) : null,
            linePrefix ? React.createElement("div", { className: "line-prefix" }, linePrefix) : null),
        aptitudeElements));
}
// key is a unique identifier so React can properly update certain parts
function generateAptitudeElement(showAptitudeName, key, shorthand, fullName, value) {
    return (React.createElement("div", { className: "aptitude-element", key: key },
        showAptitudeName ? React.createElement("div", { className: "aptitude-name" },
            React.createElement("div", { className: "aptitude-shorthand" }, shorthand),
            React.createElement("div", { className: "aptitude-fullname" }, fullName)) : null,
        React.createElement("input", { type: "text", className: "aptitude-value", defaultValue: value })));
}
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aptitude_1 = __webpack_require__(6);
var morph_1 = __webpack_require__(7);
var Character = /** @class */ (function () {
    function Character() {
        this.motivation = [];
        this.languages = [];
        this.egoAptitudes = [];
        this.finalAptitudes = [];
        this.aptitudeChecks = [];
        this.reputation = [];
        this.derivedStats = [];
        this.skills = [];
        this.gear = [];
        this.pools = [];
        this.chiSleights = [];
        this.gammaSleights = [];
        var morphAptitudes = [];
        for (var i = 0; i < 7; i++) {
            morphAptitudes.push(new aptitude_1.Aptitude(aptitudeValues[i], 0));
        }
        this.morph = new morph_1.Morph("flat", false, "none", 20, 30, "none", "none", 0, 5000, morphAptitudes);
        for (var i = 0; i < 7; i++) {
            var tempAptitude = new aptitude_1.Aptitude(aptitudeValues[i], 15);
            this.egoAptitudes.push(tempAptitude);
        }
        this.finalAptitudes = getFinalAptitudes(this.egoAptitudes, this.morph);
    }
    Character.prototype.setDerivedStats = function () {
        this.derivedStats[0] = (this.egoAptitudes[2].rating + this.egoAptitudes[1].rating) / 5;
        for (var i = 0; i < this.egoAptitudes.length; i++) {
            this.aptitudeChecks[i] = this.egoAptitudes[i].rating * 3;
        }
        this.derivedStats[1] = this.egoAptitudes[5].rating * 2;
        this.derivedStats[2] = Math.round(this.derivedStats[1] / 5);
        this.derivedStats[3] = this.derivedStats[1] * 2;
        this.derivedStats[4] = this.isAsync ? (this.psiLevel * 10) + (this.chiSleights.length * 5) : 0;
    };
    return Character;
}());
exports.Character = Character;
function getFinalAptitudes(aptitudeOne, morph) {
    if (aptitudeOne.length == morph.aptitudes.length) {
        var tempAptitudes = [];
        for (var i = 0; i < aptitudeOne.length; i++) {
            tempAptitudes.push(new aptitude_1.Aptitude(aptitudeOne[i].fullName, aptitudeOne[i].rating + morph.aptitudes[i].rating > morph.aptitudeMaximum ?
                morph.aptitudeMaximum : aptitudeOne[i].rating + morph.aptitudes[i].rating));
        }
        return tempAptitudes;
    }
    else {
        console.log("Warning: Aptitude arrays are not of equal size. No addition performed.");
        return aptitudeOne;
    }
}
var derivedAttributes;
(function (derivedAttributes) {
    derivedAttributes[derivedAttributes["Initiative"] = 0] = "Initiative";
    derivedAttributes[derivedAttributes["Lucidity"] = 1] = "Lucidity";
    derivedAttributes[derivedAttributes["Trauma Threshold"] = 2] = "Trauma Threshold";
    derivedAttributes[derivedAttributes["Insanity Rating"] = 3] = "Insanity Rating";
    derivedAttributes[derivedAttributes["Infection Rating"] = 4] = "Infection Rating";
})(derivedAttributes || (derivedAttributes = {}));
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
/* 6 */
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
/* 7 */
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