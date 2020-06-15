import React from "react";
import ReactDOM from "react-dom";
import { Tabs } from "antd-mobile";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import axios from "axios";
import Recommend from "./components/Recommend";
import HotList from "./components/HotList";
import Search from "./components/Search";

const tabs = [
  { title: <span>推荐音乐</span> },
  { title: <span>热歌榜</span> },
  { title: <span>搜索</span> }
];

const tabs2 = [
  { title: "First Tab", sub: "1" },
  { title: "Second Tab", sub: "2" },
  { title: "Third Tab", sub: "3" }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          tabBarPosition="top"
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >
          <Recommend></Recommend>
          <HotList></HotList>
          <Search></Search>
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
