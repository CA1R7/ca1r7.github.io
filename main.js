"use strict";
(self["webpackChunkv2"] = self["webpackChunkv2"] || []).push([[179],{

/***/ 61:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{background:#0c0c0c}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 479:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 2 modules
var redux = __webpack_require__(857);
// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var es = __webpack_require__(894);
;// CONCATENATED MODULE: ./src/redux/reducers/registered/overaly.ts
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
var OveralyReducer = function(param, action) {
    var state = param === void 0 ? {
        loader: true,
        status: null,
        appologize: null
    } : param;
    var objectCached;
    switch(action.type){
        case "UPDATE_OVERALY_STATE":
            return Object.assign({
            }, state, action.payload);
        case "UPDATE_OVERALY_STATUS_STATE":
            objectCached = {
            };
            for(var initStatus in action.payload){
                var ref;
                var pStatusUpdated = action.payload[initStatus];
                if (initStatus === "details") objectCached[initStatus] = Object.assign({
                }, (ref = state.status) === null || ref === void 0 ? void 0 : ref.details, typeof pStatusUpdated === "object" ? pStatusUpdated : {
                });
                else if (typeof pStatusUpdated === "number" || pStatusUpdated && pStatusUpdated.length) objectCached[initStatus] = pStatusUpdated;
            }
            return Object.assign({
            }, state, {
                status: _objectSpread({
                }, state.status, objectCached)
            });
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/redux/reducers/registered/container.ts
var ContainerReducer = function(param, action) {
    var state = param === void 0 ? {
        account: null,
        proxies: null,
        buttons: {
        }
    } : param;
    switch(action.type){
        case "UPDATE_CONTAINER_STATE":
            return Object.assign({
            }, state, action.payload);
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/redux/reducers/reducerHandler.ts
/**
 * reducers-redux-root
 */ 


var MainReducers = (0,redux/* combineReducers */.UY)({
    OveralyReducer: OveralyReducer,
    ContainerReducer: ContainerReducer
});

;// CONCATENATED MODULE: ./src/redux/index.ts
/**
 * redux-root
 */ 


var store = (0,redux/* createStore */.MT)(MainReducers, (0,redux/* compose */.qC)((0,redux/* applyMiddleware */.md)(es/* default */.Z)));

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(935);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var react_redux_es = __webpack_require__(657);
;// CONCATENATED MODULE: ./src/components/Initialize.tsx

var Initialize = function() {
    return(/*#__PURE__*/ react.createElement("div", null, "Coming soon .."));
};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss
var styles = __webpack_require__(61);
;// CONCATENATED MODULE: ./src/styles/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.Z, options);




       /* harmony default export */ const src_styles = (styles/* default */.Z && styles/* default.locals */.Z.locals ? styles/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.tsx






react_dom.render(/*#__PURE__*/ react.createElement(react_redux_es/* Provider */.zt, {
    store: store
}, /*#__PURE__*/ react.createElement(Initialize, null)), document.getElementById("root"));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [863], () => (__webpack_exec__(479)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);