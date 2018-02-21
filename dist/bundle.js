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
ReactDOM.render(React.createElement(generator_1.Generator, { compiler: "TypeScript", framework: "React" }), document.getElementById("container"));


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
var character_1 = __webpack_require__(4);
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Generator = /** @class */ (function (_super) {
    __extends(Generator, _super);
    function Generator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Generator.prototype.render = function () {
        return (React.createElement("div", { className: "generator" },
            "This deals with the logic",
            React.createElement("div", { className: "points" }, "Some number of points left to spend"),
            React.createElement(character_1.Character, { value: "Test" })));
    };
    return Generator;
}(React.Component));
exports.Generator = Generator;


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
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Character.prototype.render = function () {
        return (React.createElement("div", { className: "character" },
            "Hello",
            React.createElement("div", { className: "character-basics" },
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Character"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Background"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Faction"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Morph"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Gender Identity"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Actual Age"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Current Moxie Points"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Rez Points"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value })),
                React.createElement("div", { className: "basics-element" },
                    React.createElement("div", { className: "basics-key" }, "Motivations"),
                    React.createElement("input", { type: "text", className: "basics-value", defaultValue: this.props.value }))),
            React.createElement("div", { className: "aptitude-block" },
                generateAptitudeLine(true, [15, 15, 15, 15, 15, 15, 15]),
                generateAptitudeLine(false, [15, 15, 15, 15, 15, 15, 15]),
                generateAptitudeLine(false, [15, 15, 15, 15, 15, 15, 15]))));
    };
    ;
    return Character;
}(React.Component));
exports.Character = Character;
function generateAptitudeLine(showAptitudeName, basevalues) {
    var aptitudeElements = [];
    for (var i = 0; i < basevalues.length; i++) {
        aptitudeElements.push(generateAptitudeElement(showAptitudeName, aptitudeValues[i].slice(0, 3), aptitudeValues[i], basevalues[i].toString()));
    }
    return (React.createElement("div", { className: "aptitude-collection" }, aptitudeElements));
}
function generateAptitudeElement(showAptitudeName, shorthand, fullName, value) {
    return React.createElement("div", { className: "aptitude-element" },
        showAptitudeName ? React.createElement("div", { className: "aptitude-name" },
            React.createElement("div", { className: "aptitude-shorthand" }, shorthand),
            React.createElement("div", { className: "aptitude-fullname" }, fullName)) : null,
        React.createElement("input", { type: "text", className: "aptitude-value", defaultValue: value }));
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map