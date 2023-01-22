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
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ ((module) => {

module.exports = require("micro");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ \"micro\");\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst serviceAccount = __webpack_require__(/*! ../../../permission.json */ \"(api)/./permission.json\");\nconst app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({\n    credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)\n}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app();\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nconst endpointsecret = process.env.STRIPE_SIGNING_SECRET;\nconst fullfillOrder = async (session)=>{\n    return await app.firestore().collection(\"users\").doc(session.metadata.email).collection(\"orders\").doc(session.id).set({\n        amount: session.amount_total / 100,\n        amount_shipping: session.total_details.amount_shipping / 100,\n        images: JSON.parse(session.metadata.images),\n        timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()\n    }).then(()=>{\n        console.log(\"success and add database\", session.id);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method === \"POST\") {\n        const reqBuffer = await (0,micro__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);\n        const payload = reqBuffer.toString();\n        const sig = req.headers[\"stripe-signature\"];\n        let event;\n        try {\n            event = stripe.webhooks.constructEvent(payload, sig, endpointsecret);\n        } catch (err) {\n            console.log(err);\n            return res.status(400).send(\"webhook error\" + err.message);\n        }\n        if (event.type === \"checkout.session.completed\") {\n            const session = event.data.object;\n            return fullfillOrder(session).then(()=>{\n                res.status(200).send(\"sucess\");\n            });\n        }\n    }\n});\nconst config = {\n    api: {\n        bodyParser: false,\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFFeEMsTUFBTUUsaUJBQWlCQyxtQkFBT0EsQ0FBQyx5REFBMEI7QUFFekQsTUFBTUMsTUFBTSxDQUFDSCx1REFBaUIsR0FDMUJBLHlEQUFtQixDQUFDO0lBQ2xCTyxZQUFZUCwyREFBcUIsQ0FBQ0M7QUFDcEMsS0FDQUQsK0NBQVMsRUFBRTtBQUVmLE1BQU1TLFNBQVNQLG1CQUFPQSxDQUFDLHNCQUFRLEVBQUVRLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBRTlELE1BQU1DLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7QUFFeEQsTUFBTUMsZ0JBQWdCLE9BQU9DLFVBQVk7SUFDdkMsT0FBTyxNQUFNYixJQUNWYyxTQUFTLEdBQ1RDLFVBQVUsQ0FBQyxTQUNYQyxHQUFHLENBQUNILFFBQVFJLFFBQVEsQ0FBQ0MsS0FBSyxFQUMxQkgsVUFBVSxDQUFDLFVBQ1hDLEdBQUcsQ0FBQ0gsUUFBUU0sRUFBRSxFQUNkQyxHQUFHLENBQUM7UUFDSEMsUUFBUVIsUUFBUVMsWUFBWSxHQUFHO1FBQy9CQyxpQkFBaUJWLFFBQVFXLGFBQWEsQ0FBQ0QsZUFBZSxHQUFHO1FBQ3pERSxRQUFRQyxLQUFLQyxLQUFLLENBQUNkLFFBQVFJLFFBQVEsQ0FBQ1EsTUFBTTtRQUMxQ0csV0FBVy9CLGdGQUEwQztJQUN2RCxHQUNDa0MsSUFBSSxDQUFDLElBQU07UUFDVkMsUUFBUUMsR0FBRyxDQUFDLDRCQUE0QnBCLFFBQVFNLEVBQUU7SUFDcEQ7QUFDSjtBQUVBLGlFQUFlLE9BQU9lLEtBQUtDLE1BQVE7SUFDakMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTUMsWUFBWSxNQUFNekMsNkNBQU1BLENBQUNzQztRQUMvQixNQUFNSSxVQUFVRCxVQUFVRSxRQUFRO1FBQ2xDLE1BQU1DLE1BQU1OLElBQUlPLE9BQU8sQ0FBQyxtQkFBbUI7UUFDM0MsSUFBSUM7UUFDSixJQUFJO1lBQ0ZBLFFBQVFwQyxPQUFPcUMsUUFBUSxDQUFDQyxjQUFjLENBQUNOLFNBQVNFLEtBQUs5QjtRQUN2RCxFQUFFLE9BQU9tQyxLQUFLO1lBQ1piLFFBQVFDLEdBQUcsQ0FBQ1k7WUFDWixPQUFPVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDLGtCQUFrQkYsSUFBSUcsT0FBTztRQUMzRDtRQUVBLElBQUlOLE1BQU1PLElBQUksS0FBSyw4QkFBOEI7WUFDL0MsTUFBTXBDLFVBQVU2QixNQUFNUSxJQUFJLENBQUNDLE1BQU07WUFDakMsT0FBT3ZDLGNBQWNDLFNBQVNrQixJQUFJLENBQUMsSUFBTTtnQkFDdkNJLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDdkI7UUFDRixDQUFDO0lBQ0gsQ0FBQztBQUNILEdBQUU7QUFDSyxNQUFNSyxTQUFTO0lBQ3BCQyxLQUFLO1FBQ0hDLFlBQVksS0FBSztRQUNqQkMsa0JBQWtCLElBQUk7SUFDeEI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3BhZ2VzL2FwaS93ZWJob29rLmpzPzNmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVmZmVyIH0gZnJvbSBcIm1pY3JvXCI7XG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tIFwiZmlyZWJhc2UtYWRtaW5cIjtcblxuY29uc3Qgc2VydmljZUFjY291bnQgPSByZXF1aXJlKFwiLi4vLi4vLi4vcGVybWlzc2lvbi5qc29uXCIpO1xuXG5jb25zdCBhcHAgPSAhYWRtaW4uYXBwcy5sZW5ndGhcbiAgPyBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICAgIGNyZWRlbnRpYWw6IGFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXG4gICAgfSlcbiAgOiBhZG1pbi5hcHAoKTtcblxuY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfU0VDUkVUX0tFWSk7XG5cbmNvbnN0IGVuZHBvaW50c2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSSVBFX1NJR05JTkdfU0VDUkVUO1xuXG5jb25zdCBmdWxsZmlsbE9yZGVyID0gYXN5bmMgKHNlc3Npb24pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGFwcFxuICAgIC5maXJlc3RvcmUoKVxuICAgIC5jb2xsZWN0aW9uKFwidXNlcnNcIilcbiAgICAuZG9jKHNlc3Npb24ubWV0YWRhdGEuZW1haWwpXG4gICAgLmNvbGxlY3Rpb24oXCJvcmRlcnNcIilcbiAgICAuZG9jKHNlc3Npb24uaWQpXG4gICAgLnNldCh7XG4gICAgICBhbW91bnQ6IHNlc3Npb24uYW1vdW50X3RvdGFsIC8gMTAwLFxuICAgICAgYW1vdW50X3NoaXBwaW5nOiBzZXNzaW9uLnRvdGFsX2RldGFpbHMuYW1vdW50X3NoaXBwaW5nIC8gMTAwLFxuICAgICAgaW1hZ2VzOiBKU09OLnBhcnNlKHNlc3Npb24ubWV0YWRhdGEuaW1hZ2VzKSxcbiAgICAgIHRpbWVzdGFtcDogYWRtaW4uZmlyZXN0b3JlLkZpZWxkVmFsdWUuc2VydmVyVGltZXN0YW1wKCksXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgYW5kIGFkZCBkYXRhYmFzZVwiLCBzZXNzaW9uLmlkKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCByZXFCdWZmZXIgPSBhd2FpdCBidWZmZXIocmVxKTtcbiAgICBjb25zdCBwYXlsb2FkID0gcmVxQnVmZmVyLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc2lnID0gcmVxLmhlYWRlcnNbXCJzdHJpcGUtc2lnbmF0dXJlXCJdO1xuICAgIGxldCBldmVudDtcbiAgICB0cnkge1xuICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQocGF5bG9hZCwgc2lnLCBlbmRwb2ludHNlY3JldCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwid2ViaG9vayBlcnJvclwiICsgZXJyLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSBcImNoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkXCIpIHtcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBldmVudC5kYXRhLm9iamVjdDtcbiAgICAgIHJldHVybiBmdWxsZmlsbE9yZGVyKHNlc3Npb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChcInN1Y2Vzc1wiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICAgIGV4dGVybmFsUmVzb2x2ZXI6IHRydWUsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbImJ1ZmZlciIsImFkbWluIiwic2VydmljZUFjY291bnQiLCJyZXF1aXJlIiwiYXBwIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJjcmVkZW50aWFsIiwiY2VydCIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImVuZHBvaW50c2VjcmV0IiwiU1RSSVBFX1NJR05JTkdfU0VDUkVUIiwiZnVsbGZpbGxPcmRlciIsInNlc3Npb24iLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsIkZpZWxkVmFsdWUiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlcUJ1ZmZlciIsInBheWxvYWQiLCJ0b1N0cmluZyIsInNpZyIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJlcnIiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImV4dGVybmFsUmVzb2x2ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/webhook.js\n");

/***/ }),

/***/ "(api)/./permission.json":
/*!*************************!*\
  !*** ./permission.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"just-advice-375516","private_key_id":"769f8b290fdf1eb2436d20bbb798f75970e7bd14","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0ZRz982TMyQCi\\neo1fFvlHeyApI9mylBDJkAJHi6ORMDlETj6S/xqo4QFoRd/bIUAvWfVmbFneI5f+\\nRyzVr4cZicJdbPspaVYgQx8tPeBozgNVdcNugOWWzjbU7I8vQ05Qm2OmoiEgZch9\\nijfhfvSUaVoQB52I9dtv5MneKzt65omTTii38dA7bboUmKdP4bbeFC71kGlDCYh7\\n0WQMd1DNp4k+D9rAudu1MhEZVSv+rCDzG1tMLRJYZNOJDVBm+ijTc15ctfKIfvNL\\n62HzmLtkZ4QgELyMgZgepTYExuOk6u+84xFVNjFbGZrUmp2tGiHXRKny7JVaVuQ7\\noE1l6Ok1AgMBAAECggEAG6PujZ67Otba3l+8GkN74zmjaN+nCJdqpxJbYbkB+/S7\\n9ues63sOYQKbjkLpP5CDCX5VfTcW4f7pgrrxzLVovun+ZQWWH6HrN2WcI6N6fLSB\\niu5Qs+AozYg/8IoP5Q8BXep2mglM3W5FtQP2TKUri93vQHYvlipi+sG/Mz0ZOlr8\\npHvMwPbwkKP7yL6jFSgg3J6cbey6KN/wFPn1SRLYnTisAX8uCfjymC+izz+8iB0A\\nzRiKINRj6UMXXFajHTldHI6Jj/PgBGKyfuvF6OKs1RxajMbendBhyO/TXDadfD3I\\nn53tsIQUPfhIpJNMlrAedv2sCkOSNeT8zw6E8IYplQKBgQDeNgvrVQCIKwyIBuPU\\nlZwkfBMx+DTzdMswNfdmBfMmNzB/xEiBUA529nqRn+hZQWVs8pGd8fqFS5y1VIsL\\n0J6Fge94WiTgfun5BdEbSI5OZx8nHn7hTf0v81mOHLX5Im0mjQY3Lt2oUgqcTm6F\\n2LWXao7vYH6z7tPNhKIESz6yWwKBgQDP00z3dF7+Qv8PJHqBnJd1FHTsl45/HvrW\\noXVJAqV4HNOvIUShDob9r+7agcxyi/L3fXdCa6FnjrTYhzXx7E1jCsmWQMTS1xg0\\no4n6ItIxk806gFBpkSjaHBPB6L8dPM0veYrqdFh/vMa6sFLMBR5pdVlJnoPCVMiX\\nor4tZC2HrwKBgBAoA9PXeVNtNdsKDTSesByi/M5MSqVM350gv10mn5guuRMBFXh5\\ndqPFpgHCi6U5sQMr29SNDHb2mW1BuV5hi7UPTncErtu3vpFBkAOY0ef3bXdtqzH8\\ndqUu31sK0VxM2XzNEh+fA7TCSk01EqoeqI1azQuwi2XPvoyZ0SHYyrUzAoGAfYgi\\ne24dWvPY4KqmHNgbXCsJHUfGWN67oR1RnNIuZMj0zFoJ/EasH1w/qFiyx5XlIrz0\\nZnhgvA6lCg1R9llHvUVs0oc43Cn0gwctdpvF3xBp7KZI7Bs0U9qVzJDrr5tkTQLb\\neBbixfWfDHEo8fc9kXHChwdqit1vdLhmq0BRiB0CgYEAhrqeY9qamgIjfx5vPGvI\\njhVFrUwgWU6Pozfl9TxdyvpCPzNQhFPYuxf1ZfW9kHWR/tPUVMCUskLBfUQrCSRo\\nV/1zSyDD9qPamL4/JiKNTZ5b5Q7vv7peWcOGr10AQ7bVcZu6fqzLdz3yrrLgjjcv\\ny3z3yhxzVGI7E7in4PrHcJI=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-yapkm@just-advice-375516.iam.gserviceaccount.com","client_id":"113318773253823588151","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yapkm%40just-advice-375516.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();