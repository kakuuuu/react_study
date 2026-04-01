import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd-mobile";
import Recommend from "./Recommend";
import HotList from "./HotList";
import Search from "./Search";


const tabs = [
  { title: <span>推荐音乐</span> },
  { title: <span>热歌榜</span> },
  { title: <span>搜索</span> }
];

function mapStateToProps(state) {
  console.log(state);
  return {
    musiclist: state.default.musicList,
    inputitem: state.default.inputItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setNewItem: (Item) => {
      let actions = {
        type: "change_inputItem",
        item: Item
      };
      dispatch(actions);
    },
    addMusic: () => {
      let actions = {
        type: "add_Item"
      };
      dispatch(actions);
    }
  };
}

class Homes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  componentDidUpdate() {
    // console.log(this.props);
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
          <Recommend
            setNewItem={this.props.setNewItem}
            addMusic={this.props.addMusic}
            inputitem={this.props.inputitem}
            musiclist={this.props.musiclist}
            gotoSong={this.gotoSong}
          ></Recommend>
          <HotList gotoSong={this.gotoSong}></HotList>
          <Search gotoSong={this.gotoSong}></Search>
        </Tabs>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Homes);
