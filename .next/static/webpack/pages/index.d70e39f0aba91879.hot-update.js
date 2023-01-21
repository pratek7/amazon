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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/index.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/store */ \"./src/app/store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const items = (0,react__WEBPACK_IMPORTED_MODULE_5__.useSelector)(_app_store__WEBPACK_IMPORTED_MODULE_6__.selectItems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue p-1 flex-grow py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-2 flex items-center flex-grow sm:flex-grow-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \" https://links.papareact.com/f90\",\n                            height: 40,\n                            width: 150,\n                            objectFit: \"contain\",\n                            className: \"cursor-pointer\",\n                            onClick: ()=>router.push(\"/\")\n                        }, void 0, false, {\n                            fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"py-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-5\",\n                                placeholder: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {\n                                className: \"h-12 p-4 \"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: session ? next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut : next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: session ? \"Hello \".concat(session.user.name) : \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"Account & List\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>session && router.push(\"/order\"),\n                                className: \"link\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Return\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-extrabold md:text-sm\",\n                                        children: \"& Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>router.push(\"/checkout\"),\n                                className: \"link relative flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold\",\n                                        children: items.length\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ShoppingCartIcon, {\n                                        className: \"h-10\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" hidden font-extrabold md:text-sm md:inline mt-2\",\n                                        children: \"Basket\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.MenuIcon, {\n                                className: \"h-6 mr-1\"\n                            }, void 0, false, {\n                                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, undefined),\n                            \"All\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Prime Video\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Amazon Business\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link\",\n                        children: \"Today's Deals\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Electronics\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Food & Grocery\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Prime\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Buy Again\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Supper Toolkit\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"link hidden lg:inline-flex\",\n                        children: \"Health & Personal Care\"\n                    }, void 0, false, {\n                        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kali/Desktop/Amazon-starter-template-nextjs/src/components/Header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Vt1f3zOET5Q6kb4QfPPaZjYF9E8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUtHO0FBRTRCO0FBQ3RCO0FBQ0o7QUFDTztBQUUzQyxNQUFNVSxTQUFTLElBQU07O0lBQ25CLE1BQU0sRUFBQ0MsTUFBTUMsUUFBTyxFQUFDLEdBQUdOLDJEQUFVQTtJQUNsQyxNQUFNTyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTU8sUUFBUU4sa0RBQVdBLENBQUNDLG1EQUFXQTtJQUNyQyxxQkFDRSw4REFBQ007UUFBT0MsV0FBVTs7MEJBQ2hCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDaEIsbURBQUtBOzRCQUNKa0IsS0FBSTs0QkFDSkMsUUFBUTs0QkFDUkMsT0FBTzs0QkFDUEMsV0FBVTs0QkFDVkwsV0FBVTs0QkFDVk0sU0FBUyxJQUFNVCxPQUFPVSxJQUFJLENBQUM7Ozs7Ozs7Ozs7O2tDQUkvQiw4REFBQ047d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDUTtnQ0FDQ0MsTUFBSztnQ0FDTFQsV0FBVTtnQ0FDVlUsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDeEIsZ0VBQVVBO2dDQUFDYyxXQUFVOzs7Ozs7Ozs7Ozs7a0NBRXhCLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJSyxTQUFTVixVQUFVUCxvREFBT0EsR0FBR0QsbURBQU07Z0NBQUVZLFdBQVU7O2tEQUNsRCw4REFBQ1c7a0RBQUdmLFVBQVUsU0FBMkIsT0FBbEJBLFFBQVFnQixJQUFJLENBQUNDLElBQUksSUFBSyxTQUFTOzs7Ozs7a0RBQ3RELDhEQUFDRjt3Q0FBRVgsV0FBVTtrREFBNEI7Ozs7Ozs7Ozs7OzswQ0FFM0MsOERBQUNDO2dDQUNDSyxTQUFTLElBQU1WLFdBQVdDLE9BQU9VLElBQUksQ0FBQztnQ0FDdENQLFdBQVU7O2tEQUVWLDhEQUFDVztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQTt3Q0FBRVgsV0FBVTtrREFBNEI7Ozs7Ozs7Ozs7OzswQ0FFM0MsOERBQUNDO2dDQUNDSyxTQUFTLElBQU1ULE9BQU9VLElBQUksQ0FBQztnQ0FDM0JQLFdBQVU7O2tEQUVWLDhEQUFDYzt3Q0FBS2QsV0FBVTtrREFDYkYsTUFBTWlCLE1BQU07Ozs7OztrREFFZiw4REFBQzVCLHNFQUFnQkE7d0NBQUNhLFdBQVU7Ozs7OztrREFDNUIsOERBQUNXO3dDQUFFWCxXQUFVO2tEQUFtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU10RSw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDVzt3QkFBRVgsV0FBVTs7MENBQ1gsOERBQUNmLDhEQUFRQTtnQ0FBQ2UsV0FBVTs7Ozs7OzRCQUFhOzs7Ozs7O2tDQUduQyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQU87Ozs7OztrQ0FDcEIsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUFPOzs7Ozs7a0NBQ3BCLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBTzs7Ozs7O2tDQUNwQiw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzFDLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDMUMsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUE2Qjs7Ozs7O2tDQUMxQyw4REFBQ1c7d0JBQUVYLFdBQVU7a0NBQTZCOzs7Ozs7a0NBQzFDLDhEQUFDVzt3QkFBRVgsV0FBVTtrQ0FBNkI7Ozs7OztrQ0FDMUMsOERBQUNXO3dCQUFFWCxXQUFVO2tDQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxEO0dBckVNTjs7UUFDb0JKLHVEQUFVQTtRQUNuQkMsa0RBQVNBO1FBQ1ZDLDhDQUFXQTs7O0tBSHJCRTtBQXVFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/MzMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIE1lbnVJY29uLFxuICBTZWFyY2hJY29uLFxuICBTaG9wcGluZ0NhcnRJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5cbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGl0ZW1zID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXRlbXMpO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotNTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctYW1hem9uX2JsdWUgcC0xIGZsZXgtZ3JvdyBweS0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWdyb3cgc206ZmxleC1ncm93LTBcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIiBodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZjkwXCJcbiAgICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgICAgICB3aWR0aD17MTUwfVxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaGlkZGVuIHNtOmZsZXggaXRlbXMtY2VudGVyIGgtMTAgcm91bmRlZC1tZCBmbGV4LWdyb3cgY3Vyc29yLXBvaW50ZXIgYmcteWVsbG93LTQwMCBob3ZlcjpiZy15ZWxsb3ctNTAwIFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBoLWZ1bGwgdy02IGZsZXgtZ3JvdyByb3VuZGVkLWwtbWQgZmxleC1zaHJpbmsgZm9jdXM6b3V0bGluZS1ub25lIHB4LTVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC0xMiBwLTQgXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXhzIHNwYWNlLXgtNiBteC02IHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtzZXNzaW9uID8gc2lnbk91dCA6IHNpZ25Jbn0gY2xhc3NOYW1lPVwibGlua1wiPlxuICAgICAgICAgICAgPHA+e3Nlc3Npb24gPyBgSGVsbG8gJHtzZXNzaW9uLnVzZXIubmFtZX1gIDogXCJTaWduIEluXCJ9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgbWQ6dGV4dC1zbVwiPkFjY291bnQgJiBMaXN0PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlc3Npb24gJiYgcm91dGVyLnB1c2goXCIvb3JkZXJcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5SZXR1cm48L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtXCI+JiBPcmRlcnM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvY2hlY2tvdXRcIil9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG1kOnJpZ2h0LTEwIGgtNCB3LTQgYmcteWVsbG93LTQwMCB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1ibGFjayBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIGNsYXNzTmFtZT1cImgtMTBcIiAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGhpZGRlbiBmb250LWV4dHJhYm9sZCBtZDp0ZXh0LXNtIG1kOmlubGluZSBtdC0yXCI+XG4gICAgICAgICAgICAgIEJhc2tldFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZS1saWdodCB0ZXh0LXdoaXRlIHNwYWNlLXgtMyBwLTIgcGwtNlwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiBtci0xXCIgLz5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rXCI+UHJpbWUgVmlkZW88L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5BbWF6b24gQnVzaW5lc3M8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxpbmtcIj5Ub2RheSdzIERlYWxzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkVsZWN0cm9uaWNzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkZvb2QgJiBHcm9jZXJ5PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPlByaW1lPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleFwiPkJ1eSBBZ2FpbjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluayBoaWRkZW4gbGc6aW5saW5lLWZsZXhcIj5TdXBwZXIgVG9vbGtpdDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGluayBoaWRkZW4gbGc6aW5saW5lLWZsZXhcIj5IZWFsdGggJiBQZXJzb25hbCBDYXJlPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJNZW51SWNvbiIsIlNlYXJjaEljb24iLCJTaG9wcGluZ0NhcnRJY29uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwiSGVhZGVyIiwiZGF0YSIsInNlc3Npb24iLCJyb3V0ZXIiLCJpdGVtcyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImhlaWdodCIsIndpZHRoIiwib2JqZWN0Rml0Iiwib25DbGljayIsInB1c2giLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInAiLCJ1c2VyIiwibmFtZSIsInNwYW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n"));

/***/ })

});