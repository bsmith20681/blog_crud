webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./src/components/auth/SignupComponent.js":
/*!************************************************!*\
  !*** ./src/components/auth/SignupComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\blog_crud\\frontend\\src\\components\\auth\\SignupComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SignupComponent = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('handingl submit');
  };

  const handleChange = e => {
    console.log(e.target.value);
  };

  const signupForm = () => {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("div", {
      className: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, __jsx("input", {
      onChange: handleChange,
      type: "text",
      className: "form-control",
      placeholder: "Type your name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    })));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, signupForm());
};

/* harmony default export */ __webpack_exports__["default"] = (SignupComponent);

/***/ })

})
//# sourceMappingURL=signup.js.eb61735f8b5d06933bbc.hot-update.js.map