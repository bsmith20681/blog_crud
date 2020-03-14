webpackHotUpdate("static\\development\\pages\\signin.js",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: signup, signin, setCookie, removeCookie, getCookie, setLocalStore, removeLocalStore, authenticate, isAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStore", function() { return setLocalStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStore", function() { return removeLocalStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const signup = user => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/signup"), {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const signin = user => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/signin"), {
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const setCookie = (key, value) => {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set(key, value, {
      expires: 1
    });
  }
};
const removeCookie = key => {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove(key, {
      expires: 1
    });
  }
};
const getCookie = key => {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(key);
  }
};
const setLocalStore = (key, value) => {
  if (true) {
    localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
  }
};
const removeLocalStore = key => {
  if (true) {
    localStorage.removeItem(key);
  }
};
const authenticate = (data, next) => {
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
};
const isAuth = () => {
  if (true) {
    const cookieChecked = getCookie('token');

    if (cookieChecked) {
      if (localstorage.getItem('user')) {
        return JSON.parse(localstore.getItem('user'));
      } else {
        return false;
      }
    }
  }
};

/***/ })

})
//# sourceMappingURL=signin.js.1830718f35eb31879885.hot-update.js.map