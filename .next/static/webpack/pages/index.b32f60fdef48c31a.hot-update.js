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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const items = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_app_store__WEBPACK_IMPORTED_MODULE_6__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue p-1 flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 flex items-center flex-grow sm:flex-grow-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \" https://links.papareact.com/f90\",\n                            height: 40,\n                            width: 150,\n                            objectFit: \"contain\",\n                            className: \"cursor-pointer\",\n                            onClick: ()=>router.push(\"/\")\n                        }, void 0, false, {\n                            fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"py-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-5\",\n                                placeholder: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {\n                                className: \"h-12 p-4 \"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: session ? next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut : next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: session ? \"Hello \".concat(session.user.name) : \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"Account & List\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>session && router.push(\"/order\"),\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Return\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"& Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>router.push(\"/checkout\"),\n                                className: \"link relative flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold\",\n                                        children: items.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartIcon, {\n                                        className: \"h-10\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" hidden font-extrabold md:text-sm md:inline mt-2\",\n                                        children: \"Basket\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {\n                                className: \"h-6 mr-1\"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            \"All\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Prime Video\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Amazon Business\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Today's Deals\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Electronics\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Food & Grocery\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Prime\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Buy Again\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Supper Toolkit\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Health & Personal Care\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Vt1f3zOET5Q6kb4QfPPaZjYF9E8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBS0c7QUFFNEI7QUFDdEI7QUFDRTtBQUNDO0FBRTNDLE1BQU1VLFNBQVMsSUFBTTs7SUFDbkIsTUFBTSxFQUFDQyxNQUFNQyxRQUFPLEVBQUMsR0FBR04sMkRBQVVBO0lBQ2xDLE1BQU1PLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNTyxRQUFRTix3REFBV0EsQ0FBQ0MsbURBQVdBO0lBQ3JDLHFCQUNFLDhEQUFDTTtRQUFPQyxXQUFVOzswQkFDaEIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNoQixtREFBS0E7NEJBQ0prQixLQUFJOzRCQUNKQyxRQUFROzRCQUNSQyxPQUFPOzRCQUNQQyxXQUFVOzRCQUNWTCxXQUFVOzRCQUNWTSxTQUFTLElBQU1ULE9BQU9VLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7a0NBSS9CLDhEQUFDTjt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNRO2dDQUNDQyxNQUFLO2dDQUNMVCxXQUFVO2dDQUNWVSxhQUFZOzs7Ozs7MENBRWQsOERBQUN4QixnRUFBVUE7Z0NBQUNjLFdBQVU7Ozs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUlLLFNBQVNWLFVBQVVQLG9EQUFPQSxHQUFHRCxtREFBTTtnQ0FBRVksV0FBVTs7a0RBQ2xELDhEQUFDVztrREFBR2YsVUFBVSxTQUEyQixPQUFsQkEsUUFBUWdCLElBQUksQ0FBQ0MsSUFBSSxJQUFLLFNBQVM7Ozs7OztrREFDdEQsOERBQUNGO3dDQUFFWCxXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQ0M7Z0NBQ0NLLFNBQVMsSUFBTVYsV0FBV0MsT0FBT1UsSUFBSSxDQUFDO2dDQUN0Q1AsV0FBVTs7a0RBRVYsOERBQUNXO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNBO3dDQUFFWCxXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQ0M7Z0NBQ0NLLFNBQVMsSUFBTVQsT0FBT1UsSUFBSSxDQUFDO2dDQUMzQlAsV0FBVTs7a0RBRVYsOERBQUNjO3dDQUFLZCxXQUFVO2tEQUNiRixNQUFNaUIsTUFBTTs7Ozs7O2tEQUVmLDhEQUFDNUIsc0VBQWdCQTt3Q0FBQ2EsV0FBVTs7Ozs7O2tEQUM1Qiw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNXO3dCQUFFWCxXQUFVOzswQ0FDWCw4REFBQ2YsOERBQVFBO2dDQUFDZSxXQUFVOzs7Ozs7NEJBQWE7Ozs7Ozs7a0NBR25DLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQU87Ozs7OztrQ0FDcEIsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUFPOzs7Ozs7a0NBQ3BCLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDMUMsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUE2Qjs7Ozs7O2tDQUMxQyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzFDLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDMUMsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUE2Qjs7Ozs7O2tDQUMxQyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7R0FyRU1OOztRQUNvQkosdURBQVVBO1FBQ25CQyxrREFBU0E7UUFDVkMsb0RBQVdBOzs7S0FIckJFO0FBdUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcz8zMzJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHtcbiAgTWVudUljb24sXG4gIFNlYXJjaEljb24sXG4gIFNob3BwaW5nQ2FydEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0SXRlbXMgfSBmcm9tIFwiLi4vYXBwL3N0b3JlXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge2RhdGE6IHNlc3Npb259ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei01MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBwLTEgZmxleC1ncm93IHB5LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtZ3JvdyBzbTpmbGV4LWdyb3ctMFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiIGh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mOTBcIlxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cbiAgICAgICAgICAgIHdpZHRoPXsxNTB9XG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoaWRkZW4gc206ZmxleCBpdGVtcy1jZW50ZXIgaC0xMCByb3VuZGVkLW1kIGZsZXgtZ3JvdyBjdXJzb3ItcG9pbnRlciBiZy15ZWxsb3ctNDAwIGhvdmVyOmJnLXllbGxvdy01MDAgXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweS0yIGgtZnVsbCB3LTYgZmxleC1ncm93IHJvdW5kZWQtbC1tZCBmbGV4LXNocmluayBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2VhcmNoSWNvbiBjbGFzc05hbWU9XCJoLTEyIHAtNCBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgc3BhY2UteC02IG14LTYgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Nlc3Npb24gPyBzaWduT3V0IDogc2lnbklufSBjbGFzc05hbWU9XCJsaW5rXCI+XG4gICAgICAgICAgICA8cD57c2Vzc2lvbiA/IGBIZWxsbyAke3Nlc3Npb24udXNlci5uYW1lfWAgOiBcIlNpZ24gSW5cIn08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+QWNjb3VudCAmIExpc3Q8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2Vzc2lvbiAmJiByb3V0ZXIucHVzaChcIi9vcmRlclwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlJldHVybjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIG1kOnRleHQtc21cIj4mIE9yZGVyczwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9jaGVja291dFwiKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgbWQ6cmlnaHQtMTAgaC00IHctNCBiZy15ZWxsb3ctNDAwIHRleHQtY2VudGVyIHJvdW5kZWQtZnVsbCB0ZXh0LWJsYWNrIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RofVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gY2xhc3NOYW1lPVwiaC0xMFwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgaGlkZGVuIGZvbnQtZXh0cmFib2xkIG1kOnRleHQtc20gbWQ6aW5saW5lIG10LTJcIj5cbiAgICAgICAgICAgICAgQmFza2V0XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLWFtYXpvbl9ibHVlLWxpZ2h0IHRleHQtd2hpdGUgc3BhY2UteC0zIHAtMiBwbC02XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPVwiaC02IG1yLTFcIiAvPlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5QcmltZSBWaWRlbzwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPkFtYXpvbiBCdXNpbmVzczwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGlua1wiPlRvZGF5J3MgRGVhbHM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+RWxlY3Ryb25pY3M8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+Rm9vZCAmIEdyb2Nlcnk8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+UHJpbWU8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4XCI+QnV5IEFnYWluPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPlN1cHBlciBUb29sa2l0PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkhlYWx0aCAmIFBlcnNvbmFsIENhcmU8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIk1lbnVJY29uIiwiU2VhcmNoSWNvbiIsIlNob3BwaW5nQ2FydEljb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwic2VsZWN0SXRlbXMiLCJIZWFkZXIiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsIml0ZW1zIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJvYmplY3RGaXQiLCJvbkNsaWNrIiwicHVzaCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicCIsInVzZXIiLCJuYW1lIiwic3BhbiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});