import React, { Component } from "react";
import { connect } from "react-redux";
import { Tag, List } from "antd-mobile";
import axios from "axios";
import "../css/playlist.scss";
const Item = List.Item;
const Brief = Item.Brief;

function mapStateToProps(state) {
  return {
    value: state.num
  };
}

function mapDispatchToProps(dispath) {
  return {
    onAddClick: () => {
      // dispath(addAction);
    }
  };
}

// @connect(mapStateToProps, mapDispatchToProps)
export default
class Playlist extends Component {
  constructor(props) {
    super(props);
    // console.log("Playlist_constructor")
    // console.log(props)
    const params = new URLSearchParams(this.props.location.search);
    this.state = {
      id: params.get("id"),
      playlist: {},
      tags: [],
      creator: {},
      tracks: []
    };
  }
  componentDidMount() {
    this.getsongDetail();
  }
  gotoSong = (path, songid) => {
    this.props.history.push({
      pathname: path,
      search: `?id=${songid}`
    });
  };
  async getsongDetail() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/playlist/detail?id=" + this.state.id
    );
    if (res.code !== 200) return this.$message.error(res);
    // console.log(res);
    this.setState({
      playlist: res.playlist,
      tags: res.playlist.tags,
      creator: res.playlist.creator,
      tracks: res.playlist.tracks
    });
  }
  render() {
    return (
      <div>
        <div
          className="top-playlist"
          style={{
            backgroundImage: `url(${this.state.playlist.coverImgUrl})`
          }}
        >
          <div className="main-playlist-mask">
            <div className="main-playlist-content">
              <div className="ofplheader-imgwrap">
                <img src={this.state.playlist.coverImgUrl}></img>
              </div>
              <div className="ofplheader-wrap">
                <h2 className="ofplheader-name">{this.state.playlist.name}</h2>
                <div className="lsthd-auth">
                  <div className="avatar-wrap">
                    <img src={this.state.creator.avatarUrl}></img>
                    <span>{this.state.creator.nickname}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pylst_intro">
          <div className="lstit_tags">
            <div className="ofplheader-tags">
              <span>标签：</span>
              {this.state.tags.length &&
                this.state.tags.map((item, index) => (
                  <div className="ofplheader-tag" key={index}>
                    <Tag small>{item}</Tag>
                  </div>
                ))}
            </div>
          </div>
          <div className="ofplheader-description">
            <span>简介:</span>
            {this.state.playlist.description !== "" &&
              this.state.playlist.description}
          </div>
        </section>
        <div className="pylst_list">
          <h3 className="u-smtitle">歌曲列表</h3>
          <List className="music-list">
            {this.state.tracks.map((item, index) => (
              <Item
                arrow="horizontal"
                multipleLine
                onClick={() => {}}
                platform="android"
                onClick={() => {
                  this.gotoSong("/song", item.id);
                }}
                key={index}
              >
                {item.name}{" "}
                <Brief className="artist">
                  {item.ar[0].name}-{item.al.name}
                </Brief>
              </Item>
            ))}
          </List>
        </div>
      </div>
    );
  }
}
