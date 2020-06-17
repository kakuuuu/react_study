import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import { Tabs } from "antd-mobile";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Song from "./components/Song";
import Playlist from "./components/Playlist";
import Home from './components/Home'
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
class App_Router extends React.Component {
  constructor(props){
    super(props)
    
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Router basename="/m">
          <Route path="/" exact component={Home}></Route>
          <Route path="/song" component={Song}></Route>
          <Route path="/playlist" component={Playlist}></Route>
        </Router>
      </div>
    );
  }
}

const addAction = {
  type: "add"
};

function reducer(state = { num: 0 }, action) {
  switch (action.type) {
    case "add":
      state.num++;
      break;

    default:
      break;
  }
  return { ...state };
}

const store = createStore(reducer);

function mapStateToProps(state) {
  return {
    value: state.num
  };
}

function mapDispatchToProps(dispath) {
  return {
    onAddClick: () => {
      dispath(addAction);
    }
  };
}
const App = connect(mapStateToProps, mapDispatchToProps)(App_Router);

ReactDOM.render(
    <Provider store={store}>
      <App></App>
    </Provider>,
  document.getElementById("root")
);
