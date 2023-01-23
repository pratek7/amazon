"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const item = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue p-1 flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 flex items-center flex-grow sm:flex-grow-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"\",\n                            alt: \"ok\",\n                            height: 40,\n                            width: 150,\n                            style: {\n                                objectFit: \"contain\"\n                            },\n                            className: \"cursor-pointer\",\n                            onClick: ()=>router.push(\"/\")\n                        }, void 0, false, {\n                            fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"py-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-5\",\n                                placeholder: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.SearchIcon, {\n                                className: \"h-12 p-4 \"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: session ? next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut : next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn,\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: session ? \"Hello \".concat(session.user.name) : \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"Account & List\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>session && router.push(\"/order\"),\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Return\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"& Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>router.push(\"/checkout\"),\n                                className: \"link relative flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold\",\n                                        children: item.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ShoppingCartIcon, {\n                                        className: \"h-10\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" hidden font-extrabold md:text-sm md:inline mt-2\",\n                                        children: \"Basket\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.MenuIcon, {\n                                className: \"h-6 mr-1\"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined),\n                            \"All\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Prime Video\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Amazon Business\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Today's Deals\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Electronics\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Food & Grocery\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Prime\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Buy Again\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Supper Toolkit\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Health & Personal Care\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kali/Desktop/Amazon/src/components/Header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"LkuX8mceUodYX5jtumoQXuo7WPM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFLRztBQUU0QjtBQUN0QjtBQUNFO0FBQ1U7QUFFcEQsTUFBTVUsU0FBUyxJQUFNOztJQUNuQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTiwyREFBVUE7SUFDcEMsTUFBTU8sU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU1PLE9BQU9OLHdEQUFXQSxDQUFDQyw0REFBV0E7SUFDcEMscUJBQ0UsOERBQUNNO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ2hCLG1EQUFLQTs0QkFDSmtCLEtBQUk7NEJBQ0pDLEtBQUk7NEJBQ0pDLFFBQVE7NEJBQ1JDLE9BQU87NEJBQ1BDLE9BQU87Z0NBQ0xDLFdBQVc7NEJBQ2I7NEJBQ0FQLFdBQVU7NEJBQ1ZRLFNBQVMsSUFBTVgsT0FBT1ksSUFBSSxDQUFDOzs7Ozs7Ozs7OztrQ0FJL0IsOERBQUNSO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1U7Z0NBQ0NDLE1BQUs7Z0NBQ0xYLFdBQVU7Z0NBQ1ZZLGFBQVk7Ozs7OzswQ0FFZCw4REFBQzFCLGdFQUFVQTtnQ0FBQ2MsV0FBVTs7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBSU8sU0FBU1osVUFBVVAsb0RBQU9BLEdBQUdELG1EQUFNO2dDQUFFWSxXQUFVOztrREFDbEQsOERBQUNhO2tEQUFHakIsVUFBVSxTQUEyQixPQUFsQkEsUUFBUWtCLElBQUksQ0FBQ0MsSUFBSSxJQUFLLFNBQVM7Ozs7OztrREFDdEQsOERBQUNGO3dDQUFFYixXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQ0M7Z0NBQ0NPLFNBQVMsSUFBTVosV0FBV0MsT0FBT1ksSUFBSSxDQUFDO2dDQUN0Q1QsV0FBVTs7a0RBRVYsOERBQUNhO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFYixXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQ0M7Z0NBQ0NPLFNBQVMsSUFBTVgsT0FBT1ksSUFBSSxDQUFDO2dDQUMzQlQsV0FBVTs7a0RBRVYsOERBQUNnQjt3Q0FBS2hCLFdBQVU7a0RBQ2JGLEtBQUttQixNQUFNOzs7Ozs7a0RBRWQsOERBQUM5QixzRUFBZ0JBO3dDQUFDYSxXQUFVOzs7Ozs7a0RBQzVCLDhEQUFDYTt3Q0FBRWIsV0FBVTtrREFBbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdEUsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ2E7d0JBQUViLFdBQVU7OzBDQUNYLDhEQUFDZiw4REFBUUE7Z0NBQUNlLFdBQVU7Ozs7Ozs0QkFBYTs7Ozs7OztrQ0FHbkMsOERBQUNhO3dCQUFFYixXQUFVO2tDQUFPOzs7Ozs7a0NBQ3BCLDhEQUFDYTt3QkFBRWIsV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ2E7d0JBQUViLFdBQVU7a0NBQU87Ozs7OztrQ0FDcEIsOERBQUNhO3dCQUFFYixXQUFVO2tDQUE2Qjs7Ozs7O2tDQUMxQyw4REFBQ2E7d0JBQUViLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzFDLDhEQUFDYTt3QkFBRWIsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDMUMsOERBQUNhO3dCQUFFYixXQUFVO2tDQUE2Qjs7Ozs7O2tDQUMxQyw4REFBQ2E7d0JBQUViLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzFDLDhEQUFDYTt3QkFBRWIsV0FBVTtrQ0FBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRDtHQXhFTU47O1FBQ3NCSix1REFBVUE7UUFDckJDLGtEQUFTQTtRQUNYQyxvREFBV0E7OztLQUhwQkU7QUEwRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBNZW51SWNvbixcbiAgU2VhcmNoSWNvbixcbiAgU2hvcHBpbmdDYXJ0SWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9IGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGl0ZW0gPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBwLTEgZmxleC1ncm93IHB5LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtZ3JvdyBzbTpmbGV4LWdyb3ctMFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiXCJcbiAgICAgICAgICAgIGFsdD1cIm9rXCJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICB3aWR0aD17MTUwfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaGlkZGVuIHNtOmZsZXggaXRlbXMtY2VudGVyIGgtMTAgcm91bmRlZC1tZCBmbGV4LWdyb3cgY3Vyc29yLXBvaW50ZXIgYmcteWVsbG93LTQwMCBob3ZlcjpiZy15ZWxsb3ctNTAwIFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBoLWZ1bGwgdy02IGZsZXgtZ3JvdyByb3VuZGVkLWwtbWQgZmxleC1zaHJpbmsgZm9jdXM6b3V0bGluZS1ub25lIHB4LTVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC0xMiBwLTQgXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHNwYWNlLXgtNiBteC02IHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtzZXNzaW9uID8gc2lnbk91dCA6IHNpZ25Jbn0gY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgPHA+e3Nlc3Npb24gPyBgSGVsbG8gJHtzZXNzaW9uLnVzZXIubmFtZX1gIDogXCJTaWduIEluXCJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgbWQ6dGV4dC1zbVwiPkFjY291bnQgJiBMaXN0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlc3Npb24gJiYgcm91dGVyLnB1c2goXCIvb3JkZXJcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5SZXR1cm48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+JiBPcmRlcnM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvY2hlY2tvdXRcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG1kOnJpZ2h0LTEwIGgtNCB3LTQgYmcteWVsbG93LTQwMCB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1ibGFjayBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RofVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gY2xhc3NOYW1lPVwiaC0xMFwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgaGlkZGVuIGZvbnQtZXh0cmFib2xkIG1kOnRleHQtc20gbWQ6aW5saW5lIG10LTJcIj5cbiAgICAgICAgICAgICAgQmFza2V0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWFtYXpvbl9ibHVlLWxpZ2h0IHRleHQtd2hpdGUgc3BhY2UteC0zIHAtMiBwbC02XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IG1yLTFcIiAvPlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5QcmltZSBWaWRlbzwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPkFtYXpvbiBCdXNpbmVzczwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPlRvZGF5J3MgRGVhbHM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+RWxlY3Ryb25pY3M8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+Rm9vZCAmIEdyb2Nlcnk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+UHJpbWU8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+QnV5IEFnYWluPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPlN1cHBlciBUb29sa2l0PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkhlYWx0aCAmIFBlcnNvbmFsIENhcmU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsIlNob3BwaW5nQ2FydEljb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwic2VsZWN0SXRlbXMiLCJIZWFkZXIiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsIml0ZW0iLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCIsInN0eWxlIiwib2JqZWN0Rml0Iiwib25DbGljayIsInB1c2giLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInAiLCJ1c2VyIiwibmFtZSIsInNwYW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});