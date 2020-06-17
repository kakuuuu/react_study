import React, { Component } from "react";
import { List,Flex } from "antd-mobile";
import axios from "axios";
import '../css/hotlist.scss'

const Item = List.Item;
const Brief = Item.Brief;

export default class HotList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hotList: [] };
  }
  componentDidMount() {
    this.getHotList();
  }
  async getHotList() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/top/list?idx=1"
    );
    this.setState({ hotList: res.playlist });
  }
  render() {
    return (
      <div>
        <div className="img-warp">
          <img src={this.state.hotList.coverImgUrl}></img>
        </div>
        <List className="my-list">
          {(this.state.hotList.tracks || []).map((item,index) => (
            <Item
              arrow="horizontal"
              multipleLine
              onClick={()=>{this.props.gotoSong('/song',item.id)}}
              platform="android"
              key={index}
            >
              {item.name}
              <Brief>
                {item.ar[0].name}-{item.al.name}
              </Brief>
            </Item>
          ))}
        </List>
      </div>
    );
  }
}
