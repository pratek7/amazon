"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { items , email  } = req.body;\n    const TransformItem = items.map((item)=>({\n            quantity: 1,\n            price_data: {\n                currency: \"NPR\",\n                unit_amount: item.price * 100 * 100,\n                product_data: {\n                    name: item.title,\n                    images: [\n                        item.image\n                    ],\n                    description: item.description\n                }\n            }\n        }));\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        line_items: TransformItem,\n        shipping_address_collection: {\n            allowed_countries: [\n                \"US\",\n                \"CA\"\n            ]\n        },\n        shipping_options: [\n            {\n                shipping_rate_data: {\n                    type: \"fixed_amount\",\n                    fixed_amount: {\n                        amount: 2000,\n                        currency: \"NPR\"\n                    },\n                    display_name: \"Charge\",\n                    delivery_estimate: {\n                        minimum: {\n                            unit: \"business_day\",\n                            value: 2\n                        },\n                        maximum: {\n                            unit: \"business_day\",\n                            value: 4\n                        }\n                    }\n                }\n            }\n        ],\n        mode: \"payment\",\n        success_url: process.env.HOST + \"/success\",\n        cancel_url: process.env.HOST + \"/checkout\",\n        metadata: {\n            email,\n            images: JSON.stringify(items.map((item)=>item.image))\n        }\n    });\n    // console.log(session, \"created\");\n    res.status(200).json({\n        session\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQyxzQkFBUSxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUU5RCxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUNqQyxNQUFNQyxnQkFBZ0JILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3pDQyxVQUFVO1lBQ1ZDLFlBQVk7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLGFBQWFKLEtBQUtLLEtBQUssR0FBRyxNQUFNO2dCQUNoQ0MsY0FBYztvQkFDWkMsTUFBTVAsS0FBS1EsS0FBSztvQkFDaEJDLFFBQVE7d0JBQUNULEtBQUtVLEtBQUs7cUJBQUM7b0JBQ3BCQyxhQUFhWCxLQUFLVyxXQUFXO2dCQUMvQjtZQUNGO1FBQ0Y7SUFDQSxNQUFNQyxVQUFVLE1BQU14QixPQUFPeUIsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztRQUNwREMsc0JBQXNCO1lBQUM7U0FBTztRQUM5QkMsWUFBWW5CO1FBQ1pvQiw2QkFBNkI7WUFBRUMsbUJBQW1CO2dCQUFDO2dCQUFNO2FBQUs7UUFBQztRQUMvREMsa0JBQWtCO1lBQ2hCO2dCQUNFQyxvQkFBb0I7b0JBQ2xCQyxNQUFNO29CQUNOQyxjQUFjO3dCQUFFQyxRQUFRO3dCQUFNckIsVUFBVTtvQkFBTTtvQkFDOUNzQixjQUFjO29CQUNkQyxtQkFBbUI7d0JBQ2pCQyxTQUFTOzRCQUFFQyxNQUFNOzRCQUFnQkMsT0FBTzt3QkFBRTt3QkFDMUNDLFNBQVM7NEJBQUVGLE1BQU07NEJBQWdCQyxPQUFPO3dCQUFFO29CQUM1QztnQkFDRjtZQUNGO1NBQ0Q7UUFDREUsTUFBTTtRQUNOQyxhQUFhMUMsUUFBUUMsR0FBRyxDQUFDMEMsSUFBSSxHQUFHO1FBQ2hDQyxZQUFZNUMsUUFBUUMsR0FBRyxDQUFDMEMsSUFBSSxHQUFHO1FBQy9CRSxVQUFVO1lBQ1J2QztZQUNBYSxRQUFRMkIsS0FBS0MsU0FBUyxDQUFDMUMsTUFBTUksR0FBRyxDQUFDLENBQUNDLE9BQVNBLEtBQUtVLEtBQUs7UUFDdkQ7SUFDRjtJQUNBLG1DQUFtQztJQUNuQ2hCLElBQUk0QyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUUzQjtJQUFRO0FBQ2pDLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzP2JhMjIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IGl0ZW1zLCBlbWFpbCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IFRyYW5zZm9ybUl0ZW0gPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcHJpY2VfZGF0YToge1xuICAgICAgY3VycmVuY3k6IFwiTlBSXCIsXG4gICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCAqIDEwMCxcbiAgICAgIHByb2R1Y3RfZGF0YToge1xuICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgIGxpbmVfaXRlbXM6IFRyYW5zZm9ybUl0ZW0sXG4gICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiB7IGFsbG93ZWRfY291bnRyaWVzOiBbXCJVU1wiLCBcIkNBXCJdIH0sXG4gICAgc2hpcHBpbmdfb3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBzaGlwcGluZ19yYXRlX2RhdGE6IHtcbiAgICAgICAgICB0eXBlOiBcImZpeGVkX2Ftb3VudFwiLFxuICAgICAgICAgIGZpeGVkX2Ftb3VudDogeyBhbW91bnQ6IDIwMDAsIGN1cnJlbmN5OiBcIk5QUlwiIH0sXG4gICAgICAgICAgZGlzcGxheV9uYW1lOiBcIkNoYXJnZVwiLFxuICAgICAgICAgIGRlbGl2ZXJ5X2VzdGltYXRlOiB7XG4gICAgICAgICAgICBtaW5pbXVtOiB7IHVuaXQ6IFwiYnVzaW5lc3NfZGF5XCIsIHZhbHVlOiAyIH0sXG4gICAgICAgICAgICBtYXhpbXVtOiB7IHVuaXQ6IFwiYnVzaW5lc3NfZGF5XCIsIHZhbHVlOiA0IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtb2RlOiBcInBheW1lbnRcIixcbiAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuSE9TVCArIFwiL3N1Y2Nlc3NcIixcbiAgICBjYW5jZWxfdXJsOiBwcm9jZXNzLmVudi5IT1NUICsgXCIvY2hlY2tvdXRcIixcbiAgICBtZXRhZGF0YToge1xuICAgICAgZW1haWwsXG4gICAgICBpbWFnZXM6IEpTT04uc3RyaW5naWZ5KGl0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5pbWFnZSkpLFxuICAgIH0sXG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyhzZXNzaW9uLCBcImNyZWF0ZWRcIik7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2Vzc2lvbiB9KTtcbn07XG4iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwiVHJhbnNmb3JtSXRlbSIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwidGl0bGUiLCJpbWFnZXMiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImxpbmVfaXRlbXMiLCJzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb24iLCJhbGxvd2VkX2NvdW50cmllcyIsInNoaXBwaW5nX29wdGlvbnMiLCJzaGlwcGluZ19yYXRlX2RhdGEiLCJ0eXBlIiwiZml4ZWRfYW1vdW50IiwiYW1vdW50IiwiZGlzcGxheV9uYW1lIiwiZGVsaXZlcnlfZXN0aW1hdGUiLCJtaW5pbXVtIiwidW5pdCIsInZhbHVlIiwibWF4aW11bSIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIkhPU1QiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-checkout-session.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();