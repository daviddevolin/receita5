"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies3",{

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheLink\": function() { return /* binding */ TheLink; },\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies3; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction Movies3() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), url = ref[0], setUrl = ref[1];\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher), data = ref1.data, error = ref1.error;\n    var onClickHandler = function(e) {\n        e.preventDefault();\n        if (url === \"\") setUrl(\"http://www.omdbapi.com/?apikey=3b864bc8&s=bagdad\");\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies3, \"ynBEaIz6npTcFjs1lbtjg8BSniI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies3;\nfunction TheMovies(param) {\n    var data = param.data, show = param.show;\n    var _this = this;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n        lineNumber: 23,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n        lineNumber: 24,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n        lineNumber: 25,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map(function(m) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n                lineNumber: 28,\n                columnNumber: 39\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TheMovies;\nfunction TheLink(param) {\n    var url = param.url, handler = param.handler;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\david\\\\OneDrive\\\\Documents\\\\bsi\\\\pweb\\\\receita3\\\\pages\\\\movies3.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_c2 = TheLink;\nfunction theFetcher(url) {\n    return _theFetcher.apply(this, arguments);\n}\nfunction _theFetcher() {\n    _theFetcher = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(url) {\n        var res, json;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    if (url === null || url === \"\") return [\n                        2,\n                        {\n                            Search: \"\"\n                        }\n                    ];\n                    return [\n                        4,\n                        fetch(url)\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    json = _state.sent();\n                    return [\n                        2,\n                        json\n                    ];\n            }\n        });\n    });\n    return _theFetcher.apply(this, arguments);\n}\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Movies3\");\n$RefreshReg$(_c1, \"TheMovies\");\n$RefreshReg$(_c2, \"TheLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxJQUFJLElBQUlBLEdBQUcsS0FBSyxFQUFFLEVBQUU7O3dCQUFPOzRCQUFDWSxNQUFNLEVBQUMsRUFBRTt5QkFBQztzQkFBQTtvQkFDdEM7O3dCQUFNVyxLQUFLLENBQUN2QixHQUFHLENBQUM7c0JBQUE7O29CQUF0QnFCLEdBQUcsR0FBRyxhQUFnQjtvQkFDZjs7d0JBQU1BLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO3NCQUFBOztvQkFBdkJBLElBQUksR0FBRyxhQUFnQjtvQkFDN0I7O3dCQUFPQSxJQUFJO3NCQUFDOzs7SUFDaEIsQ0FBQztXQUxjcEIsV0FBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZpZXMzLmpzPzdhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcblxyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzMygpe1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUih1cmwsIHRoZUZldGNoZXIpXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHVybCA9PT0gJycpIHNldFVybCgnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTNiODY0YmM4JnM9YmFnZGFkJylcclxuICAgICAgICBlbHNlIHNldFVybCgnJylcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXt1cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfS8+XHJcbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17IGVycm9yP3tlcnJvcjonRXJybyBuYSBwZXNxdWlzYSd9OiBkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXt1cmwgIT09ICcnfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XHJcbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pICAgIFxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo288L2Rpdj4pXHJcbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsgZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdj57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApIH0gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUxpbmsoe3VybCwgaGFuZGxlcn0peyAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9tb3ZpZXMzLmpzXCIgb25DbGljaz17aGFuZGxlcn0+IHt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfSA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHRoZUZldGNoZXIodXJsKSB7XHJcbiAgICBpZiAodXJsID09PSBudWxsIHx8IHVybCA9PT0gJycpIHJldHVybiB7U2VhcmNoOicnfVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVN0YXRlIiwiTW92aWVzMyIsInVybCIsInNldFVybCIsInRoZUZldGNoZXIiLCJkYXRhIiwiZXJyb3IiLCJvbkNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsIlRoZUxpbmsiLCJoYW5kbGVyIiwiVGhlTW92aWVzIiwiU2VhcmNoIiwic2hvdyIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJyZXMiLCJqc29uIiwiZmV0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/movies3.js\n"));

/***/ })

});