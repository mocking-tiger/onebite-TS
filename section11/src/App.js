"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTodoDispatch = exports.TodoDispatchContext = exports.TodoStateContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
require("./App.css");
var Editor_1 = __importDefault(require("./components/Editor"));
var TodoItem_1 = __importDefault(require("./components/TodoItem"));
function reducer(state, action) {
    switch (action.type) {
        case 'CREATE': {
            return __spreadArray(__spreadArray([], state, true), [action.data], false);
        }
        case 'DELETE': {
            return state.filter(function (it) { return it.id !== action.id; });
        }
    }
}
exports.TodoStateContext = react_1.default.createContext(null);
exports.TodoDispatchContext = react_1.default.createContext(null);
function useTodoDispatch() {
    var dispatch = (0, react_1.useContext)(exports.TodoDispatchContext);
    if (!dispatch)
        throw new Error('TodoDispatchContext에 문제가 있다');
    return dispatch;
}
exports.useTodoDispatch = useTodoDispatch;
function App() {
    var _a = (0, react_1.useReducer)(reducer, []), todos = _a[0], dispatch = _a[1];
    var idRef = (0, react_1.useRef)(0);
    var onClickAdd = function (text) {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                content: text,
            },
        });
    };
    var onClickDelete = function (id) {
        dispatch({
            type: 'DELETE',
            id: id,
        });
    };
    (0, react_1.useEffect)(function () {
        console.log(todos);
    }, [todos]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Todo" }), (0, jsx_runtime_1.jsx)(exports.TodoStateContext.Provider, { value: todos, children: (0, jsx_runtime_1.jsxs)(exports.TodoDispatchContext.Provider, { value: {
                        onClickAdd: onClickAdd,
                        onClickDelete: onClickDelete,
                    }, children: [(0, jsx_runtime_1.jsx)(Editor_1.default, {}), (0, jsx_runtime_1.jsx)("div", { children: todos.map(function (todo) { return ((0, jsx_runtime_1.jsx)(TodoItem_1.default, __assign({}, todo), todo.id)); }) })] }) })] }));
}
exports.default = App;
