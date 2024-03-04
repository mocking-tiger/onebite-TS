"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var App_1 = require("../App");
function TodoItem(props) {
    var dispatch = (0, App_1.useTodoDispatch)();
    var onClickButton = function () {
        dispatch.onClickDelete(props.id);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [props.id, "\uBC88 : ", props.content, (0, jsx_runtime_1.jsx)("button", { onClick: onClickButton, children: "\uC0AD\uC81C" })] }));
}
exports.default = TodoItem;
