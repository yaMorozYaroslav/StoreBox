"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comps_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../comps/layout/Layout */ \"./comps/layout/Layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ \"./node_modules/date-fns/esm/parseISO/index.js\");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ \"./node_modules/date-fns/esm/format/index.js\");\n\n\n\n\n\nfunction Date(param) {\n    let { dateString } = param;\n    const date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dateString);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n        dateTime: dateString,\n        children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(date, \"LLLL d, yyyy\")\n    }, void 0, false, {\n        fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, this);\n}\n_c = Date;\nvar __N_SSG = true;\nfunction Post(param) {\n    let { postData } = param;\n    console.log(postData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            postData._id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n                lineNumber: 54,\n                columnNumber: 32\n            }, this),\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: postData.title\n                }, void 0, false, {\n                    fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n                lineNumber: 55,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Date, {\n                dateString: postData.createdAt\n            }, void 0, false, {\n                fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n                lineNumber: 58,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n                lineNumber: 59,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/yaro/StoreBox/pages/posts/[id].js\",\n        lineNumber: 54,\n        columnNumber: 10\n    }, this);\n}\n_c1 = Post;\nvar _c, _c1;\n$RefreshReg$(_c, \"Date\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFJbEI7QUFDZTtBQUFBO0FBRTNDLFNBQVNJLEtBQUssS0FBYztRQUFkLEVBQUVDLFVBQVUsRUFBRSxHQUFkO0lBQ1osTUFBTUMsT0FBT0osNkRBQVFBLENBQUNHO0lBQ3RCLHFCQUFPLDhEQUFDRTtRQUFLQyxVQUFVSDtrQkFBYUYsMkRBQU1BLENBQUNHLE1BQU07Ozs7OztBQUNuRDtLQUhTRjs7QUE0Q00sU0FBU0ssS0FBSyxLQUFVO1FBQVYsRUFBQ0MsUUFBUSxFQUFDLEdBQVY7SUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWCxxQkFBTyw4REFBQ1YsNERBQU1BOztZQUFFVSxTQUFTRyxHQUFHOzBCQUFDLDhEQUFDQzs7Ozs7WUFBS0osU0FBU0ssS0FBSzswQkFDeEMsOERBQUNkLGtEQUFJQTswQkFDUiw0RUFBQ2M7OEJBQU9MLFNBQVNLLEtBQUs7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ1g7Z0JBQUtDLFlBQVlLLFNBQVNNLFNBQVM7Ozs7OzswQkFDcEMsOERBQUNDO2dCQUFJQyx5QkFBeUI7b0JBQUVDLFFBQVFULFNBQVNVLFdBQVc7Z0JBQUM7Ozs7Ozs7Ozs7OztBQUV4RTtNQVR3QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcz83OTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcHMvbGF5b3V0L0xheW91dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gJ3JlbWFyaydcbmltcG9ydCBodG1sIGZyb20gJ3JlbWFyay1odG1sJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuXG5mdW5jdGlvbiBEYXRlKHsgZGF0ZVN0cmluZyB9KSB7XG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKTtcbiAgcmV0dXJuIDx0aW1lIGRhdGVUaW1lPXtkYXRlU3RyaW5nfT57Zm9ybWF0KGRhdGUsICdMTExMIGQsIHl5eXknKX08L3RpbWU+O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpe1xuXHRjb25zdCBwb3N0cyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgICAgJ2h0dHBzOi8vaXRlbS1hdXRoLWJhY2stMDU1NWFmNmI5NTE4Lmhlcm9rdWFwcC5jb20vaXRlbXMnKVxuXHQgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEuaXRlbXMpXG5cdHJldHVybiBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIGlkOiBwb3N0Ll9pZCxcbiAgICAgIH0sXG4gICAgfVxuICB9KVxuXHR9XG5hc3luYyBmdW5jdGlvbiBnZXRQb3N0RGF0YShpZCl7XG5cdGNvbnN0IHBvc3RzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAnaHR0cHM6Ly9pdGVtLWF1dGgtYmFjay0wNTU1YWY2Yjk1MTguaGVyb2t1YXBwLmNvbS9pdGVtcycpXG5cdCAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuZGF0YS5pdGVtcylcblx0Y29uc3QgcG9zdCA9IHBvc3RzLmZpbHRlcihpdGVtID0+IHtcblx0XHQgICAgIGlmIChpdGVtLl9pZCA9PT0gaWQpe3JldHVybiBpdGVtfVxuXHRcdFx0IHJldHVybiBudWxsfSlcblx0Y29uc3Qge3Bob3RvLCAuLi5yZXN0fSA9IHBvc3RbMF1cblx0Y29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpLnVzZShodG1sKS5wcm9jZXNzKHJlc3QuZGVzY3JpcHRpb24pXG5cdGNvbnN0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpXG5cdHJldHVybiB7Y29udGVudEh0bWwsIC4uLnJlc3R9XG5cdH1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBnZXRBbGxQb3N0SWRzKCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3REYXRhLFxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7cG9zdERhdGF9KSB7XG5cdGNvbnNvbGUubG9nKHBvc3REYXRhKVxuICByZXR1cm4gPExheW91dD57cG9zdERhdGEuX2lkfTxici8+e3Bvc3REYXRhLnRpdGxlfVxuICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwb3N0RGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgIDxEYXRlIGRhdGVTdHJpbmc9e3Bvc3REYXRhLmNyZWF0ZWRBdH0gLz5cbiAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3REYXRhLmNvbnRlbnRIdG1sIH19Lz5cbiAgICAgICAgIDwvTGF5b3V0Pjtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJIZWFkIiwicGFyc2VJU08iLCJmb3JtYXQiLCJEYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJQb3N0IiwicG9zdERhdGEiLCJjb25zb2xlIiwibG9nIiwiX2lkIiwiYnIiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsImRpdiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[id].js\n"));

/***/ })

});