import React, { Component } from "react";
import { SearchBar, Button,List } from "antd-mobile";
import axios from "axios";

const Item = List.Item;
const Brief = Item.Brief;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", focus: false, result: [] };
  }
  changeValue = (props) => {
    this.setState({
      value: props
    });
  };

  getSearchKeywords = async (props) => {
    const { data: res } = await axios.get(
      "http://www.liaowang.xyz:3000/search?keywords=" + this.state.value
    );
    console.log(res);
    this.setState({ result: res.result.songs });
    this.setState({ focus: false });
  };

  render() {
    return (
      <div>
        <SearchBar
          onChange={this.changeValue}
          placeholder="搜索"
          value={this.state.value}
          onFocus={() => {
            this.setState({ focus: true });
          }}
          
        />
        { this.state.focus&&this.state.value !== "" && (
          <Button onClick={()=>{this.getSearchKeywords()}}>
            搜索 "{this.state.value}"
          </Button>
        )}
        <List className="my-list">
          {(this.state.result || []).map((item) => (
            <Item
              arrow="horizontal"
              multipleLine
              onClick={() => {}}
              platform="android"
            >
              {item.name}
              <Brief>
                {item.artists[0].name}-{item.album.name}
              </Brief>
            </Item>
          ))}
        </List>

      </div>
    );
  }
}
