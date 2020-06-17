import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd-mobile";
import Recommend from "./Recommend";
import HotList from "./HotList";
import Search from "./Search";
import { fetchArticleList } from "../action/actions";

const tabs = [
  { title: <span>推荐音乐</span> },
  { title: <span>热歌榜</span> },
  { title: <span>搜索</span> }
];

function mapStateToProps(state) {
  return {
    value: state.num
  };
}

function mapDispatchToProps(dispath) {
  return {
    fetchArticleList: () => {
      dispath(fetchArticleList());
    }
  };
}

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Home:");
    console.log(this.props);
  }
  gotoSong = (path, songid) => {
    this.props.history.push({
      pathname: path,
      search: `?id=${songid}`
    });
  };
  render() {
    return (
      <div>
        <div className="top-content">
          <h1>
            <span className="iconfont icon-icon-test13"></span>云音乐
          </h1>
        </div>
        <Tabs
          tabs={tabs}
          initialPage={0}
          tabBarActiveTextColor="#d43c33"
          tabBarUnderlineStyle={{ borderColor: "#d43c33" }}
          tabBarPosition="top"
        >
          <Recommend gotoSong={this.gotoSong}></Recommend>
          <HotList gotoSong={this.gotoSong}></HotList>
          <Search gotoSong={this.gotoSong}></Search>
        </Tabs>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
