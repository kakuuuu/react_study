import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Song from "./components/Song";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
import store, { history } from "./store/store";
import "./css/globle.scss";
import "normalize.css";

function resetWidth() {
  // 兼容ie浏览器 document.body.clientWidth

  var baseWidth =
    document.documentElement.clientWidth || document.body.clientWidth;

  // 默认的设置是375px(ip6)的根元素设为100px, 其他的手机都相对这个进行调整

  document.documentElement.style.fontSize = (baseWidth / 375) * 100 + "px";
}

resetWidth();

window.addEventListener("resize", function () {
  resetWidth();
});
class App_Router extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router basename="/m">
          <Route path="/" exact component={Home}></Route>
          <Route path="/song" component={Song}></Route>
          <Route path="/playlist" component={Playlist}></Route>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App_Router></App_Router>, document.getElementById("root"));
