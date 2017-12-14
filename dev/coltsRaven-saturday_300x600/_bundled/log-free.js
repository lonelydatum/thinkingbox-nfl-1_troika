(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
function start() {
	var t1 = arguments.length <= 0 || arguments[0] === undefined ? 1.6 : arguments[0];
	var t2 = arguments.length <= 1 || arguments[1] === undefined ? 2.1 : arguments[1];

	var tl = new TimelineMax();
	tl.from('.t1', .3, { opacity: 0 });
	tl.to('.t1', .3, { opacity: 0 }, '+=' + t1);
	tl.from('.t2', .3, { opacity: 0 });
	tl.to('.t2', .3, { opacity: 0 }, '+=' + t2);
	tl.from('.t3', .3, { opacity: 0 });
}

exports['default'] = start;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonJsNflJs = require('../../_common/js/nfl.js');

var _commonJsNflJs2 = _interopRequireDefault(_commonJsNflJs);

(0, _commonJsNflJs2['default'])();

},{"../../_common/js/nfl.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
