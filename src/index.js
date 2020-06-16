import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Tabs } from "antd-mobile";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import axios from "axios";
import Recommend from "./components/Recommend";
import HotList from "./components/HotList";
import Search from "./components/Search";
import Song from "./components/Song";
import Playlist from './components/Playlist'
import "./globle.scss";

const tabs = [
  { title: <span>推荐音乐</span> },
  { title: <span>热歌榜</span> },
  { title: <span>搜索</span> }
];


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
class App extends React.Component {
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

class Home extends Component {
  gotoSong = (path,songid) => {
    this.props.history.push({
      pathname: path,
      search: `?id=${songid}`
    });
  };
  render() {
    return (
      <div>
        <div className="top-content">
          <h1><span class="iconfont icon-icon-test13"></span>React音乐</h1>
        </div>
        <Tabs tabs={tabs} initialPage={0} tabBarActiveTextColor="#d43c33" tabBarUnderlineStyle={{"border-color":"#d43c33"}} tabBarPosition="top">
          <Recommend gotoSong={this.gotoSong}></Recommend>
          <HotList gotoSong={this.gotoSong}></HotList>
          <Search gotoSong={this.gotoSong}></Search>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById("root")
);
