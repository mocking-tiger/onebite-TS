'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var jsx_runtime_1 = require('react/jsx-runtime');
var react_1 = require('react');
var App_1 = require('../App');
function Editor(props) {
  var dispatch = (0, App_1.useTodoDispatch)();
  var _a = (0, react_1.useState)(''),
    text = _a[0],
    setText = _a[1];
  var onChangeInput = function (e) {
    setText(e.target.value);
  };
  var onClickButton = function () {
    dispatch.onClickAdd(text);
    setText('');
  };
  return (0, jsx_runtime_1.jsxs)('div', {
    children: [
      (0, jsx_runtime_1.jsx)('input', { value: text, onChange: onChangeInput }),
      (0, jsx_runtime_1.jsx)('button', {
        onClick: onClickButton,
        children: '\uCD94\uAC00',
      }),
    ],
  });
}
exports.default = Editor;
