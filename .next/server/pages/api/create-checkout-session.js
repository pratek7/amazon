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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { items , email  } = req.body;\n    const TransformItem = items.map((item)=>({\n            quantity: 1,\n            price_data: {\n                currency: \"NPR\",\n                unit_amount: item.price * 100 * 100,\n                product_data: {\n                    name: item.title,\n                    images: [\n                        item.image\n                    ],\n                    description: item.description\n                }\n            }\n        }));\n    const session = await stripe.checkout.sessions.create({\n        payment_method_types: [\n            \"card\"\n        ],\n        line_items: TransformItem,\n        shipping_address_collection: {\n            allowed_countries: [\n                \"US\",\n                \"CA\"\n            ]\n        },\n        shipping_options: [\n            {\n                shipping_rate_data: {\n                    type: \"fixed_amount\",\n                    fixed_amount: {\n                        amount: 2000,\n                        currency: \"NPR\"\n                    },\n                    display_name: \"Charge\",\n                    delivery_estimate: {\n                        minimum: {\n                            unit: \"business_day\",\n                            value: 2\n                        },\n                        maximum: {\n                            unit: \"business_day\",\n                            value: 4\n                        }\n                    }\n                }\n            }\n        ],\n        mode: \"payment\",\n        success_url: `${process.env.HOST}/success`,\n        cancel_url: `${process.env.HOST}/canceled`,\n        metadata: {\n            email,\n            images: JSON.stringify(items.map((item)=>item.image))\n        }\n    });\n    // console.log(session, \"created\");\n    res.status(200).json({\n        session\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxTQUFTQyxtQkFBT0EsQ0FBQyxzQkFBUSxFQUFFQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQjtBQUU5RCxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUVqQyxNQUFNQyxnQkFBZ0JILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ3pDQyxVQUFVO1lBQ1ZDLFlBQVk7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLGFBQWFKLEtBQUtLLEtBQUssR0FBRyxNQUFNO2dCQUNoQ0MsY0FBYztvQkFDWkMsTUFBTVAsS0FBS1EsS0FBSztvQkFDaEJDLFFBQVE7d0JBQUNULEtBQUtVLEtBQUs7cUJBQUM7b0JBQ3BCQyxhQUFhWCxLQUFLVyxXQUFXO2dCQUMvQjtZQUNGO1FBQ0Y7SUFDQSxNQUFNQyxVQUFVLE1BQU14QixPQUFPeUIsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztRQUNwREMsc0JBQXNCO1lBQUM7U0FBTztRQUM5QkMsWUFBWW5CO1FBQ1pvQiw2QkFBNkI7WUFBRUMsbUJBQW1CO2dCQUFDO2dCQUFNO2FBQUs7UUFBQztRQUMvREMsa0JBQWtCO1lBQ2hCO2dCQUNFQyxvQkFBb0I7b0JBQ2xCQyxNQUFNO29CQUNOQyxjQUFjO3dCQUFFQyxRQUFRO3dCQUFNckIsVUFBVTtvQkFBTTtvQkFDOUNzQixjQUFjO29CQUNkQyxtQkFBbUI7d0JBQ2pCQyxTQUFTOzRCQUFFQyxNQUFNOzRCQUFnQkMsT0FBTzt3QkFBRTt3QkFDMUNDLFNBQVM7NEJBQUVGLE1BQU07NEJBQWdCQyxPQUFPO3dCQUFFO29CQUM1QztnQkFDRjtZQUNGO1NBQ0Q7UUFDREUsTUFBTTtRQUNOQyxhQUFhLENBQUMsRUFBRTFDLFFBQVFDLEdBQUcsQ0FBQzBDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDMUNDLFlBQVksQ0FBQyxFQUFFNUMsUUFBUUMsR0FBRyxDQUFDMEMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQ0UsVUFBVTtZQUNSdkM7WUFDQWEsUUFBUTJCLEtBQUtDLFNBQVMsQ0FBQzFDLE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLVSxLQUFLO1FBQ3ZEO0lBQ0Y7SUFDQSxtQ0FBbUM7SUFDbkNoQixJQUFJNEMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFM0I7SUFBUTtBQUNqQyxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi5qcz9iYTIyIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoXCJzdHJpcGVcIikocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpdGVtcywgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IFRyYW5zZm9ybUl0ZW0gPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcHJpY2VfZGF0YToge1xuICAgICAgY3VycmVuY3k6IFwiTlBSXCIsXG4gICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCAqIDEwMCxcbiAgICAgIHByb2R1Y3RfZGF0YToge1xuICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUoe1xuICAgIHBheW1lbnRfbWV0aG9kX3R5cGVzOiBbXCJjYXJkXCJdLFxuICAgIGxpbmVfaXRlbXM6IFRyYW5zZm9ybUl0ZW0sXG4gICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiB7IGFsbG93ZWRfY291bnRyaWVzOiBbXCJVU1wiLCBcIkNBXCJdIH0sXG4gICAgc2hpcHBpbmdfb3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBzaGlwcGluZ19yYXRlX2RhdGE6IHtcbiAgICAgICAgICB0eXBlOiBcImZpeGVkX2Ftb3VudFwiLFxuICAgICAgICAgIGZpeGVkX2Ftb3VudDogeyBhbW91bnQ6IDIwMDAsIGN1cnJlbmN5OiBcIk5QUlwiIH0sXG4gICAgICAgICAgZGlzcGxheV9uYW1lOiBcIkNoYXJnZVwiLFxuICAgICAgICAgIGRlbGl2ZXJ5X2VzdGltYXRlOiB7XG4gICAgICAgICAgICBtaW5pbXVtOiB7IHVuaXQ6IFwiYnVzaW5lc3NfZGF5XCIsIHZhbHVlOiAyIH0sXG4gICAgICAgICAgICBtYXhpbXVtOiB7IHVuaXQ6IFwiYnVzaW5lc3NfZGF5XCIsIHZhbHVlOiA0IH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtb2RlOiBcInBheW1lbnRcIixcbiAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3VjY2Vzc2AsXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vY2FuY2VsZWRgLFxuICAgIG1ldGFkYXRhOiB7XG4gICAgICBlbWFpbCxcbiAgICAgIGltYWdlczogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmltYWdlKSksXG4gICAgfSxcbiAgfSk7XG4gIC8vIGNvbnNvbGUubG9nKHNlc3Npb24sIFwiY3JlYXRlZFwiKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwicmVxIiwicmVzIiwiaXRlbXMiLCJlbWFpbCIsImJvZHkiLCJUcmFuc2Zvcm1JdGVtIiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwidW5pdF9hbW91bnQiLCJwcmljZSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJzZXNzaW9uIiwiY2hlY2tvdXQiLCJzZXNzaW9ucyIsImNyZWF0ZSIsInBheW1lbnRfbWV0aG9kX3R5cGVzIiwibGluZV9pdGVtcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwic2hpcHBpbmdfb3B0aW9ucyIsInNoaXBwaW5nX3JhdGVfZGF0YSIsInR5cGUiLCJmaXhlZF9hbW91bnQiLCJhbW91bnQiLCJkaXNwbGF5X25hbWUiLCJkZWxpdmVyeV9lc3RpbWF0ZSIsIm1pbmltdW0iLCJ1bml0IiwidmFsdWUiLCJtYXhpbXVtIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiSE9TVCIsImNhbmNlbF91cmwiLCJtZXRhZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/create-checkout-session.js\n");

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