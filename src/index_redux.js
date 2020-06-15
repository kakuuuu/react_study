import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

//通过动作action，创建新state
const reducer = function (state = { num: 0 }, action) {
  switch (action.type) {
    case "add":
      state.num++;
      break;

    case "dec":
      state.num--;
      break;
    default:
      break;
  }
  return { ...state }; //对象的拷贝
};
const store = createStore(reducer);
// 创建sotre
console.log(store);
function add() {
  store.dispatch({ type: "add" });
  console.log(store.getState());
}
function dec() {
  store.dispatch({ type: "dec" });
  console.log(store.getState());
}

// 函数式计数器
const Couter = function (props) {
  return (
    <div>
      <h1>计数数量：{store.getState().num}</h1>
      <button onClick={add}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Couter />
  </React.StrictMode>,
  document.getElementById("root")
);

store.subscribe(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />

      <Couter />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
