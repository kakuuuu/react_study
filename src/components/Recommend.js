import React, { Component } from "react";
import { Flex, List, WingBlank } from "antd-mobile";
import axios from "axios";
import "./recommend.scss";

const Item = List.Item;
const Brief = Item.Brief;

export default class Recommend extends Component {
  constructor(props) {
    super(props);
    // 不要在这里调用 this.setState()
    this.state = { playList: [], newSongs: [] };
  }
  componentDidMount() {
    this.getPersonalizedPlaylist();
    this.getPersonalizedNewsong();
  }
  async getPersonalizedPlaylist() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/top/playlist?limit=6&order=new"
    );
    if (res.code !== 200) return this.$message.error(res);
    this.setState({ playList: res.playlists });
  }
  async getPersonalizedNewsong() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/personalized/newsong"
    );
    this.setState({ newSongs: res.result });
  }
  render() {
    return (
      <div className="recommend">
        <h2>推荐歌单</h2>
        <WingBlank size="sm">
          <Flex align="start">
            {this.state.playList.slice(0, 3).map((item) => (
              <Flex.Item onClick={() => {
                this.props.gotoSong('/playlist',item.id);
              }}>
                <div class="item">
                  <div class="img-wrap">
                    <img src={item.coverImgUrl + "?param=400y400"} alt="" />
                  </div>
                  <p class="name">{item.name}</p>
                </div>
              </Flex.Item>
            ))}
          </Flex>
          <Flex align="start">
            {this.state.playList.slice(3, 6).map((item) => (
              <Flex.Item onClick={() => {
                this.props.gotoSong('/playlist',item.id);
              }}>
                <div class="item">
                  <div class="img-wrap">
                    <div class="desc-wrap">
                      <span class="desc">{item.copywriter}</span>
                    </div>
                    <img src={item.coverImgUrl + "?param=400y400"} alt="" />
                  </div>
                  <p class="name">{item.name}</p>
                </div>
              </Flex.Item>
            ))}
          </Flex>
        </WingBlank>

        <h2>最新音乐</h2>
        <List className="music-list">
          {this.state.newSongs.map((item) => (
            <Item
              arrow="horizontal"
              multipleLine
              onClick={() => {}}
              platform="android"
              onClick={() => {
                this.props.gotoSong('/song',item.id);
              }}
            >
              {item.name}{" "}
              <Brief className="artist">
                {item.song.artists[0].name}-{item.song.album.name}
              </Brief>
            </Item>
          ))}
        </List>
      </div>
    );
  }
}
