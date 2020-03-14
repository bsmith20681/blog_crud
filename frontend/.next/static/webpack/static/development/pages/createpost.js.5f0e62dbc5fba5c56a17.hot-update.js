webpackHotUpdate("static\\development\\pages\\createpost.js",{

/***/ "./src/components/create-post.component.js":
/*!*************************************************!*\
  !*** ./src/components/create-post.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreatePost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\blog_crud\\frontend\\src\\components\\create-post.component.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class CreatePost extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); // Setting up functions

    this.onChangePostTitle = this.onChangePostTitle.bind(this);
    this.onChangePostBody = this.onChangePostBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      title: '',
      body: ''
    };
  }

  onChangePostTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangePostBody(e) {
    this.setState({
      body: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const postObject = {
      title: this.state.title,
      body: this.state.body
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:4000/posts/create-post', postObject).then(res => console.log(res.data));
    this.setState({
      title: '',
      body: ''
    });
    this.props.history.push('/postlist');
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      class: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("label", {
      for: "exampleFormControlInput1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Title"), __jsx("input", {
      type: "text",
      value: this.state.title,
      onChange: this.onChangePostTitle,
      class: "form-control",
      id: "exampleFormControlInput1",
      placeholder: "Enter title here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), __jsx("div", {
      class: "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("label", {
      for: "exampleFormControlTextarea1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Blog Post"), __jsx("textarea", {
      class: "form-control",
      value: this.state.body,
      onChange: this.onChangePostBody,
      id: "exampleFormControlTextarea1",
      rows: "3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    })), __jsx("button", {
      type: "submit",
      class: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Submit")));
  }

}

/***/ })

})
//# sourceMappingURL=createpost.js.5f0e62dbc5fba5c56a17.hot-update.js.map