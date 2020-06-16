import React, { Component } from "react";
import axios from "axios";

export default class Playlist extends Component {
  constructor(props) {
    super(props);
    const params = new URLSearchParams(this.props.location.search);
    this.state = {
      id: params.get("id"),
      playlist: {}
    };
  }
  componentDidMount() {
    this.getsongDetail();
  }
  async getsongDetail() {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/playlist/detail?id=" + this.state.id
    );
    if (res.code !== 200) return this.$message.error(res);
    console.log(res);
    this.setState({
      playlist: res.playlist
    });
  }
  render() {
    return (
      <div
        className="mian-playlist"
        style={{ "background-image": `url(${this.state.playlist.coverImgUrl})` }}
      >
        <div class="main-playlist-mask">
          <div className="main-playlist-content">
            <div className="flex-center">
              <div
                className={
                  this.state.playStatus === "PLAYING"
                    ? "song-disc turn"
                    : "song-disc"
                }
              >
                <img src={this.state.playlist.coverImgUrl}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
