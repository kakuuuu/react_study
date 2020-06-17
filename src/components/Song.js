import React, { Component } from "react";
import axios from "axios";
import Sound from "react-sound";
import { connect } from "react-redux";
import { Progress } from "antd-mobile";
import Lyric from "lyric-parser";
import BScroll from "better-scroll";
import "../css/song.scss";

function mapStateToProps(state) {
  return {
    musicList: state.musicList,
    inputItem: state.inputItem
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

class Song extends Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    this.state = {
      id: params.get("id"),
      url: "",
      playStatus: "PLAYING",
      songDetail: {},
      lyric: [],
      scroll: {},
      position: 0,
      percent: 0,
      length: 0,
      activeindex: 0
    };
  }
  componentDidMount() {
    this.getMusicUrl();
    this.getsongDetail();
    this.getMusicLyric();
    console.log(this.props);
    // this.throttle(this.init(), 500);
    this.lyricScrollInit();
  }
  async getMusicUrl() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/song/url?id=" + this.state.id
    );
    if (res.code !== 200) return this.$message.error(res);
    this.setState({ url: res.data[0].url });
  }
  async getsongDetail() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/song/detail?ids=" + this.state.id
    );
    if (res.code !== 200) return this.$message.error(res);
    // console.log(res);
    this.setState({
      songDetail: res.songs[0].al
    });
  }
  async getMusicLyric() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/lyric?id=" + this.state.id
    );
    if (res.code !== 200) return this.$message.error(res);
    // console.log(res);
    if (typeof res.lrc.lyric !== "undefined") {
      if (res.lrc.lyric === "") {
        this.setState({ lyric: [{ time: 0, txt: "纯音乐，请您欣赏" }] });
        return;
      }
    }
    if ("undefined" !== typeof res.nolyric) {
      if (res.nolyric) {
        this.setState({ lyric: [{ time: 0, txt: "无歌词" }] });
        return;
      }
    }
    this.setState({ lyric: new Lyric(res.lrc.lyric).lines });
  }
  init = async (position, duration) => {
    // console.log(this.state);
    this.setState({
      percent: (position / duration) * 100
    });

    var timeStamp = position;
    let activeIndex = await this.state.lyric.findIndex((item, index) => {
      return item.time < timeStamp && this.state.lyric[index + 1]
        ? this.state.lyric[index + 1].time > timeStamp
        : true;
    });
    this.setState({
      activeindex: activeIndex
    });

    if (activeIndex <= this.state.lyric.length - 7) {
      this.state.scroll.scrollTo(
        0,
        -34 *
          ((document.documentElement.clientWidth || document.body.clientWidth) /
            375) *
          activeIndex,
        500
      );
    }
  };
  lyricScrollInit() {
    this.setState({
      scroll: new BScroll(this.refs.lyric)
    });
  }
  render() {
    return (
      <div
        className="mian-song"
        style={{ backgroundImage: `url(${this.state.songDetail.picUrl})` }}
      >
        <div className="main-mask">
          <div className="main-music">
            <div className="flex-center">
              <div
                className={
                  this.state.playStatus === "PLAYING"
                    ? "song-disc turn"
                    : "song-disc"
                }
              >
                <img src={this.state.songDetail.picUrl}></img>
              </div>
            </div>
            <Sound
              ref="audio"
              url={this.state.url}
              playStatus={this.state.playStatus}
              // playFromPosition={this.state.position}
              onPlaying={(e) => {
                this.init(e.position, e.duration);
              }}
            ></Sound>
            <div className="lyric-content" ref="lyric">
              <div className="lyric-item-wrapper">
                {(this.state.lyric || []).map((item, index) => (
                  <div
                    className={
                      index === this.state.activeindex
                        ? "lyric-item active"
                        : "lyric-item"
                    }
                    onClick={(e) => {
                      console.log(e);
                    }}
                    key={index}
                  >
                    {item.txt}
                  </div>
                ))}
              </div>
            </div>
            <div className="play-line">
              <Progress percent={this.state.percent} position="normal" />
            </div>
            <div className="play-control-absolute">
              <div className="play-control">
                <div>
                  <span className="iconfont icon-icon-test8"></span>
                </div>
                <div>
                  <span className="iconfont icon-icon-test"></span>
                </div>
                {this.state.playStatus === "PAUSED" && (
                  <div>
                    <span
                      className="iconfont icon-icon-test2 center-icon"
                      onClick={() => {
                        if (this.state.playStatus === "PLAYING") {
                          this.setState({
                            playStatus: "PAUSED"
                          });
                        }
                        if (this.state.playStatus === "PAUSED") {
                          this.setState({
                            playStatus: "PLAYING"
                          });
                        }
                      }}
                    ></span>
                  </div>
                )}

                {this.state.playStatus === "PLAYING" && (
                  <div>
                    <span
                      className="iconfont icon-icon-test1 center-icon"
                      onClick={() => {
                        if (this.state.playStatus === "PLAYING") {
                          this.setState({
                            playStatus: "PAUSED"
                          });
                        }
                        if (this.state.playStatus === "PAUSED") {
                          this.setState({
                            playStatus: "PLAYING"
                          });
                        }
                      }}
                    ></span>
                  </div>
                )}

                <div>
                  <span className="iconfont icon-icon-test6"></span>
                </div>

                <div>
                  <span className="iconfont icon-icon-test14"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
